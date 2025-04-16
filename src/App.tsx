import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Loader from './components/Core/Loader/Loader';
import { useSelector } from 'react-redux';
import { RootState } from './store/shopStore';
import ErrorBoundary from './components/ErrorBoundery/ErrorBoundery';
import FilterBar from './components/FilterBar/FilterBar';
import Toast from './components/Core/Toast/Toast';

function App() {
  const { isLoading } = useSelector((state: RootState) => state.products);
  return (
    <ErrorBoundary>
      <Layout>
        <Header />
        <FilterBar />
        <ProductList />
        {isLoading && <Loader />}
        <Toast />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
