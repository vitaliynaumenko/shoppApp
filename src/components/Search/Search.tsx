import React, { useCallback } from 'react';
import Button from '../UI/Button';
import { AppDispatch } from '../../store/shopping';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../store/slices/productsSlice';

// import '../Header.scss';

const Search: React.FC = props => {
  const dispatch = useDispatch<AppDispatch>();

  const onHandleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(searchProducts(e.target.value));
    },
    [dispatch]
  );

  return (
    <div className="header__search">
      <input
        type="text"
        placeholder={'Search products...'}
        className={'header__search--input'}
        onChange={onHandleSearch}
      />
    </div>
  );
};

export default Search;
