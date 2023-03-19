import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ProductDetails } from 'models/product';
import React, { memo, useMemo } from 'react';
import { TotalCart } from 'utils/currency';
import Item from './Item';

interface BillProps {
  cartList: ProductDetails[];
}

const BillList: React.FunctionComponent<BillProps> = ({ cartList }) => {
  const Total = useMemo(() => TotalCart(cartList), [cartList]);

  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Sub Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList.map((product) => (
              <Item
                item={product}
                key={product.id}
              />
            ))}
            <TableRow>
              <TableCell colSpan={3}>Total:</TableCell>
              <TableCell colSpan={1}>{Total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default memo(BillList);
