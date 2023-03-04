import { Stack } from '@mui/material';
import { Banner, Category } from 'components/home';
import { memo } from 'react';

export interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <Stack>
      <Banner />
      <Category title="Category List" />
    </Stack>
  );
}

export default memo(HomePage);
