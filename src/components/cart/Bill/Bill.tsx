import { Box } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { selectCartItems } from 'features/cart/cartSlice';
import React, { memo } from 'react';
import BillList from './BillList';
import BillTitle from './BillTitle';

interface BillProps {}

const Bill: React.FunctionComponent<BillProps> = (props) => {
  const CartList = useAppSelector(selectCartItems);

  return (
    <Box>
      <BillTitle />
      <BillList cartList={CartList} />
    </Box>
  );
};

export default memo(Bill);
