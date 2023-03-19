import { Container, Stack, Box } from '@mui/material';
import Footer from 'components/common/Footer/Footer';
import Header from 'components/common/Header';

import { LayoutProps } from 'models/common';
import * as React from 'react';

export interface NoSideBarLayoutProps {}

export const NoSideBarLayout = React.memo(function NoSideBarLayout({ children }: LayoutProps) {
  return (
    <Stack
      bgcolor={'#efefef'}
      minHeight={'100vh'}
    >
      <Header />
      <Container
        fixed
        sx={{ mt: 2, flexGrow: 1 }}
      >
        <Box>
          <Stack component="main">{children}</Stack>
        </Box>
      </Container>
      <Footer />
    </Stack>
  );
});
