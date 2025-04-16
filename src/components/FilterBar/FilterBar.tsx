import React, { useCallback, useEffect } from 'react';
import Select from '../Core/Select';
import Button from '../Core/Button';
import ApiShop from '../../api/apiShop';
import { fetchProductsByCategory, resetFilter } from '../../store/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/shopStore';

import './Filter.scss';

interface IFilterProps {
  children?: React.ReactNode;
}

const FilterBar: React.FC<IFilterProps> = props => {
  const dispatch = useDispatch<AppDispatch>();
  const [categories, setCategories] = React.useState<string[]>([]);

  const onHandleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(fetchProductsByCategory(e.target.value));
  }, []);

  const onHandleReset = useCallback(() => {
    dispatch(resetFilter());
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await ApiShop.getInstance().getCategories();
        setCategories(categories);
      } catch (e) {
        throw Error(`something went wrong ${e}`);
      }
    };
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

export default FilterBar;
