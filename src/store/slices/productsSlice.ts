import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ApiServices from '../../api/apiServices';
import { setIsLoading } from './loaderSlice';

export interface Product {
  id: number;
  price: number;
  category: string;
  title: string;
  image: string;
}

interface ProductsState {
  items: Product[];
  allItems: Product[];
  categories: string[];
  selectedCategory: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  searchQuery: string;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  allItems: [],
  categories: [],
  selectedCategory: '',
  status: 'idle',
  searchQuery: '',
  error: null,
};

// Асинхронні thunks для API-запитів
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { dispatch }) => {
  try {
    dispatch(setIsLoading(true));
    const response = await ApiServices.getInstance().getProducts();
    return response;
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setIsLoading(false));
  }
});

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await ApiServices.getInstance().getCategories();
  return response;
});

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (category: string, { dispatch }) => {
    try {
      dispatch(setIsLoading(true));
      const response = await ApiServices.getInstance().getProductsByCategory(category);
      return { products: response, category };
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProductsByCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      if (action.payload === '') {
        state.selectedCategory = action.payload;
      } else {
        state.items = state.items.filter(product => product.category === action.payload);
      }
    },
    resetFilter: state => {
      state.selectedCategory = '';
      // console.log('state reset',state);
      state.items = state.allItems;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      if (action.payload.toLowerCase() === '') {
        state.items = state.allItems;
      } else {
        state.items = state.allItems.filter(
          product =>
            product.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            product.category.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
  extraReducers: builder => {
    builder
      // Обробка fetchProducts
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.allItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Помилка завантаження продуктів';
      })
      // Обробка fetchCategories

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      // Обробка fetchProductsByCategory
      .addCase(fetchProductsByCategory.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // @ts-ignore
        state.selectedCategory = action.payload.category;
        // @ts-ignore
        state.items = action.payload.products;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Помилка завантаження продуктів';
      });
  },
});

export const { filterProductsByCategory, resetFilter, searchProducts } = productsSlice.actions;
export default productsSlice.reducer;
