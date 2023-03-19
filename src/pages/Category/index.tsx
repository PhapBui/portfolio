import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

export interface CategoryPageProps {}
function CategoryPage(props: CategoryPageProps) {
  return (
    <div>
      CategoryPage
      <Outlet />
    </div>
  );
}

export default memo(CategoryPage);
