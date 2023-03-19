import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { cartActions, selectCartItems } from 'features/cart/cartSlice';
import React, { memo, useEffect } from 'react';
import Item from './Item';

interface ItemListProps {}

const ItemList: React.FunctionComponent<ItemListProps> = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(selectCartItems);

  useEffect(() => {
    dispatch(cartActions.addToCart);
  }, [dispatch]);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, index) => (
              <Item
                product={product}
                key={product.id}
                index={index}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default memo(ItemList);
