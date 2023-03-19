import React, { memo } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';

export interface ProductPageProps {}
function ProductPage(props: ProductPageProps) {
  return (
    <div>
      <Routes>
        <Route
          index
          element={<h1>Admin Page</h1>}
        />
      </Routes>
      <Outlet />
    </div>
  );
}

export default memo(ProductPage);
