import { Stack, Box, Container } from '@mui/material';
import Footer from 'components/common/Footer/Footer';
import Header from 'components/common/Header/Header';

import { LayoutProps } from 'models/common';
import * as React from 'react';
import Sidebar from 'components/common/Sidebar/Sidebar';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div className={'wrapper'}>
      <Container fixed>
        <Header />
        <Stack direction="row">
          <Box
            component="aside"
            sx={{ width: { lg: 230, xs: 0 } }}
          >
            <Sidebar />
          </Box>
          <Box
            component="main"
            sx={{ width: { lg: 'calc(100% - 230px)', xs: '100%' } }}
          >
            {children}
          </Box>
        </Stack>
        <Footer />
      </Container>
    </div>
  );
}
