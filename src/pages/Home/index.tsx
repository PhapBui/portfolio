import { Stack } from '@mui/material';
import { Banner, Category } from 'components/home';
import ProductGalley from 'components/home/productGalley';
import { memo } from 'react';

export interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <Stack>
      <Banner />
      <Category title="Category List" />
      <Category title="Hot Deal" />
      <ProductGalley />
    </Stack>
  );
}

export default memo(HomePage);
