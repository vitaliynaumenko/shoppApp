import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Loader from './components/UI/Loader/Loader';
import { useSelector } from 'react-redux';
import { RootState } from './store/shopping';
import ErrorBoundary from './components/ErrorBoundery/ErrorBoundery';
import Filter from './components/Filter/Filter';
import Toast from './components/UI/Toast/Toast';

function App() {
  const { isLoading } = useSelector((state: RootState) => state.loader);
  return (
    <ErrorBoundary>
      <Layout>
        <Header />
        <Filter />
        <ProductList />
        {isLoading && <Loader />}
        <Toast />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
