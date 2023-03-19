import { Stack, Box, Container } from '@mui/material';
import Footer from 'components/common/Footer/Footer';
import Header from 'components/common/Header';

import { LayoutProps } from 'models/common';
import * as React from 'react';
import Sidebar from 'components/common/Sidebar/Sidebar';

export interface MainLayoutProps {}

export const MainLayout = React.memo(function MainLayout({ children }: LayoutProps) {
  return (
    <Box bgcolor={'#efefef'}>
      <Header />
      <Container
        fixed
        sx={{ mt: 2 }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Box
            component="aside"
            sx={{ width: { lg: 230, xs: 0 } }}
          >
            <Sidebar />
          </Box>
          <Box
            component="main"
            sx={{ width: { lg: 'calc(100% - 254px)', xs: '100%' } }}
          >
            {children}
          </Box>
        </Stack>
        <Footer />
      </Container>
    </Box>
  );
});
