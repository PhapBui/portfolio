import { Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Banner, Category } from 'components/home';
import ProductGalley from 'components/home/productGalley';
import { selectHotdeal, productActions } from 'features/product/productSlice';
import { ListParams } from 'models/common';
import { memo, useEffect } from 'react';

export interface HomePageProps {}

function HomePage(props: HomePageProps) {
  const dispath = useAppDispatch();
  const HotDealList = useAppSelector(selectHotdeal);

  useEffect(() => {
    const params: ListParams = { page: 1, limit: 10, sortBy: 'discount', order: 'desc' };
    dispath(productActions.fetchHotDeal(params));
  }, [dispath]);

  return (
    <Stack>
      <Banner />
      {/* <Category title="Category List" /> */}
      <Category
        title="Hot Deal"
        itemList={HotDealList}
      />
      <ProductGalley />
    </Stack>
  );
}

export default memo(HomePage);
