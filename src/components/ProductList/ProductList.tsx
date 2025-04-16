import React, {useCallback, useEffect, useState} from 'react';
import ApiServices from "../../api/apiServices";
import ProductItem from "../ProductItem/ProductItem";

import './ProductList.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/slices/productsSlice";
import {AppDispatch} from "../../store/shopping";
import Loader from "../UI/Loader/Loader";

interface IProduct {
    key: number;
    price:number;
    category:string;
    title:string;
    image:string;
    id:number;
}

const ProductList: React.FC = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const {items, status, loading} = useSelector((state: any) => state.products);

    useEffect(() => {
        if (status === 'idle') {
           dispatch(fetchProducts());
        }

    }, [dispatch, status]);

    return (
        <>
        <div className={'product-list'}>
            {items?.map((product:IProduct)=>(
            <ProductItem key={product.id} id={product.id} price={product.price} category={product.category}  src={product.image} title={product.title}/>
        ))}
        </div>
        </>

    );
}

export default ProductList;