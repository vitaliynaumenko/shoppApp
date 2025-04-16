import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import loaderSlice from './slices/loaderSlice';
import cartModalSlice from './slices/cartModalSlice';
import cartSlice from './slices/cart';
import toastSlice from './slices/toastSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    loader: loaderSlice,
    cartModal: cartModalSlice,
    cart: cartSlice,
    toast: toastSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
