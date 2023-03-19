import { TableCell, TableRow } from '@mui/material';
import { ProductDetails } from 'models/product';
import React, { memo, useMemo } from 'react';
import { currency } from 'utils/currency';

interface ItemProps {
  item: ProductDetails;
}
const Item: React.FunctionComponent<ItemProps> = ({ item }) => {
  const Cash = useMemo((): number => {
    return item.currentPrice * item.quantity;
  }, [item]);
  return (
    <TableRow>
      <TableCell align="left">{item.name}</TableCell>
      <TableCell align="left">{item.quantity}</TableCell>
      <TableCell align="left">{currency(+item.currentPrice)}</TableCell>
      <TableCell align="left">{currency(Cash)}</TableCell>
    </TableRow>
  );
};

export default memo(Item);
