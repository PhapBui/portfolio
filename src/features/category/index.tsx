import React, { memo, useEffect } from 'react';
import ListCategoryPage from 'features/category/pages/ListCategories';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { categoryActions, selectCategoryList } from './categorySlice';

interface CategoryProps {}

const Category: React.FunctionComponent<CategoryProps> = (props) => {
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(selectCategoryList);

  useEffect(() => {
    dispatch(categoryActions.fetchAllCategory());
  }, [dispatch]);

  return (
    <>
      <h2>Category List</h2>
      <ListCategoryPage categoryList={categoryList} />
    </>
  );
};

export default memo(Category);
