import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

export interface ProductPageProps {}
function ProductPage(props: ProductPageProps) {
  return (
    <div>
      ProductPage
      <Outlet />
    </div>
  );
}

export default memo(ProductPage);
