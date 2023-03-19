import React, { memo } from 'react';
import ListPage from './pages/ListPage';

interface ProductProps {}

const Product: React.FunctionComponent<ProductProps> = (props) => {
  return (
    <>
      <ListPage />
    </>
  );
};

export default memo(Product);
