import React from 'react';
import Image from '../Core/Image';
import Button from '../Core/Button';
import { AppDispatch } from '../../store/shopStore';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { showToast } from '../../store/slices/toastSlice';

interface IProductItemProps {
  key: number;
  title: string;
  price: number;
  category: string;
  src: string;
  id: number;
}

const ProductItem: React.FC<IProductItemProps> = ({ ...props }) => {
  const { title, price, category, id, src } = props;
  const dispatch = useDispatch<AppDispatch>();

  const onHandleAddToCart = () => {
    dispatch(addToCart({ title, price, id, src, quantity: 1 }));
    dispatch(showToast(`${title} added to cart`));
  };

  return (
    <div className={'product-list__item'}>
      <div className="product-list__item--img">
        <Image src={src} classes={''} alt={title} loading={'lazy'} />
      </div>
      <div className="product-list__item--title">{title}</div>
      <div className="product-list__item--category">{category}</div>
      <div className="product-list__item--price">price: {price} USD</div>
      <div className="product-list__item--footer">
        <Button classes="product-list__item--btn btn" onClick={onHandleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
