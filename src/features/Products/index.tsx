import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { memo, useEffect } from 'react';
import ListPage from './pages/ListPage';
import { productActions, productFilter } from './productSlice';

interface ProductProps {}

const Product: React.FunctionComponent<ProductProps> = (props) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(productFilter);

  useEffect(() => {
    dispatch(productActions.fetchProductList(filter));
  }, [dispatch, filter]);
  return (
    <>
      <ListPage />
    </>
  );
};

export default memo(Product);
