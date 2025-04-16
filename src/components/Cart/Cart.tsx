import React from 'react';
import Image from '../Core/Image';
import Button from '../Core/Button';

import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/shopStore';
import { setIsOpenCart } from '../../store/slices/cartSlice';

import { MdOutlineClose } from 'react-icons/md';

const Cart: React.FC = props => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.cart);

  const onHandleCloseCart = () => {
    dispatch(setIsOpenCart(false));
  };
  return (
    <div className={'cart'}>
      <div className="cart__container">
        <div className="cart__title">Cart</div>
        <Button classes={'cart__btn btn'} onClick={onHandleCloseCart}>
          <MdOutlineClose size={20} color={'#000'} />
        </Button>
        <ul className={'cart__list'}>
          {items.map(item => (
            <li className={'cart__list--item'}>
              <div className={'cart__list--img'}>
                <Image src={item.src} />
              </div>
              <div className={'cart__list--content'}>
                <div className={'cart__list--title'}>{item.title}</div>
                <div className="cart__list--wr">
                  <div className={'cart__list--price'}>{item.price} USD</div>
                  <div className={'cart__list--quantity'}>{item.quantity}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
