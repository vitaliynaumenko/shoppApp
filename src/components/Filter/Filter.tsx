import React, { useCallback, useEffect } from 'react';
import Select from '../UI/Select';
import Button from '../UI/Button';
import ApiServices from '../../api/apiServices';
import { fetchProductsByCategory, resetFilter } from '../../store/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/shopping';

import './Filter.scss';

interface IFilterProps {
  children?: React.ReactNode;
}

const Filter: React.FC<IFilterProps> = props => {
  const dispatch = useDispatch<AppDispatch>();
  const [categories, setCategories] = React.useState<string[]>([]);

  const fetchCategories = useCallback(async () => {
    try {
      const categories = await ApiServices.getInstance().getCategories();
      setCategories(categories);
    } catch (e) {
      throw Error(`something went wrong ${e}`);
    }
  }, []);

  const onHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(fetchProductsByCategory(e.target.value));
    },
    [dispatch]
  );

  const onHandleReset = useCallback(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={'filter'}>
      <div className={'filter__title'}>Filter by category</div>
      <div className={'filter__container'}>
        <Select classes={'filter__select'} data={categories} onChange={onHandleChange} />
        <Button classes={'btn header__btn--reset'} onClick={onHandleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filter;
