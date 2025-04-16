import React, { useCallback } from 'react';
import Button from '../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/shopping';
import Cart from '../Cart/Cart';
import { setIsOpenCart } from '../../store/slices/cartModalSlice';
import { FaBasketShopping } from 'react-icons/fa6';

import './Header.scss';

import Search from '../Search/Search';

const Header: React.FC = props => {
  const dispatch = useDispatch<AppDispatch>();

  const { isOpenCart } = useSelector((state: RootState) => state.cartModal);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const onHandleCart = useCallback(() => {
    dispatch(setIsOpenCart(true));
  }, [dispatch]);

  return (
    <>
      <header className={'header'}>
        <Search />
        <Button classes={'btn header__btn--cart'} onClick={onHandleCart}>
          <>
            <FaBasketShopping size={20} color={'#fff'} />
            {cartItems.length > 0 && <span>{totalCount}</span>}
          </>
        </Button>
      </header>
      {isOpenCart && <Cart />}
    </>
  );
};

export default Header;
