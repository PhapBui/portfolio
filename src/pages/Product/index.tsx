import React, { memo } from 'react';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';

export interface ProductPageProps {}
function ProductPage(props: ProductPageProps) {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/admin/product" />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default memo(ProductPage);
