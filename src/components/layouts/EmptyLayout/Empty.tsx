import { Box } from '@mui/material';
import { LayoutProps } from 'models/common';
import * as React from 'react';

export interface EmptyLayoutProps {}

export const EmptyLayout = React.memo(function EmptyLayout({ children }: LayoutProps) {
  return <Box sx={{ minHeight: '100vh' }}>{children}</Box>;
});
