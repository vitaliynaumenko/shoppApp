import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ApiShop from '../../api/apiShop';

import { ProductsState } from '../../types/types';

const initialState: ProductsState = {
  items: [],
  allItems: [],
  categories: [],
  selectedCategory: '',
  status: 'idle',
  searchQuery: '',
  error: null,
  isLoading: false,
};

// async thunks for API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { dispatch }) => {
  try {
    dispatch(setIsLoading(true));
    return await ApiShop.getInstance().getProducts();
  } catch (e) {
    throw Error(`something went wrong ${e}`);
  } finally {
    dispatch(setIsLoading(false));
  }
});

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  try {
    return ApiShop.getInstance().getCategories();
  } catch (e) {
    throw Error(`something went wrong ${e}`);
  }
});

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (category: string, { dispatch }) => {
    try {
      dispatch(setIsLoading(true));
      const response = await ApiShop.getInstance().getProductsByCategory(category);
      return { products: response, category };
    } catch (e) {
      throw Error(`something went wrong ${e}`);
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
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      //  fetchProducts
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
      //  fetchCategories

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      //  fetchProductsByCategory
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

export const { filterProductsByCategory, resetFilter, searchProducts, setIsLoading } =
  productsSlice.actions;
export default productsSlice.reducer;
