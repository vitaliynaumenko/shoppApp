export interface Product {
  id: number;
  price: number;
  category: string;
  title: string;
  image: string;
}

export interface ProductsState {
  items: Product[];
  allItems: Product[];
  categories: string[];
  selectedCategory: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  searchQuery: string;
  error: string | null;
  isLoading: boolean;
}
export interface CartItem extends Pick<Product, 'id' | 'price' | 'title'> {
  quantity: number;
  src: string;
}

export interface CartState {
  items: CartItem[];
  isOpenCart: boolean;
}
export interface ToastState {
  isVisible: boolean;
  message: string;
}
export interface IProduct {
  key: number;
  price: number;
  category: string;
  title: string;
  image: string;
  id: number;
}

export type Category = string;
