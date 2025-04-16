import React, { useCallback, useEffect, useState } from 'react';
import ApiShop from '../../api/apiShop';
import ProductItem from '../ProductItem/ProductItem';

import './ProductList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productsSlice';
import { AppDispatch } from '../../store/shopStore';
import Loader from '../Core/Loader/Loader';
import { IProduct } from '../../types/types';

const ProductList: React.FC = props => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, loading } = useSelector((state: any) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status]);

  return (
    <>
      <div className={'product-list'}>
        {items?.map((product: IProduct) => (
          <ProductItem
            key={product.id}
            id={product.id}
            price={product.price}
            category={product.category}
            src={product.image}
            title={product.title}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
