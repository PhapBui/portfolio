import React, { memo } from 'react';
import { Stack } from '@mui/material';

interface CartItemProps {
  children: React.ReactNode;
}

const CartItem = ({ children }: CartItemProps) => {
  return (
    <Stack
      sx={{
        maxWidth: '100%',
        flexDirection: 'row',
        columnGap: 1,
        alignItems: 'center',
        px: 2,
      }}
    >
      {children}
    </Stack>
  );
};

export default memo(CartItem);
