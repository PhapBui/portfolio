import { Box, Button, Stack, TableCell, TableRow, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { cartActions } from 'features/cart/cartSlice';
import AddToCart from 'features/cart/components/AddToCart';
import { ProductDetails } from 'models/product';
import React from 'react';
import { currency } from 'utils/currency';

interface ItemProps {
  product: ProductDetails;

  index: number;
}

const Item: React.FunctionComponent<ItemProps> = ({ product, index }) => {
  const dispatch = useAppDispatch();

  const handleUpdateItem = (product: ProductDetails) => {
    dispatch(cartActions.updateItemQty(product));
  };
  const handleRemoveItem = () => {
    dispatch(cartActions.removeProductInCart(index));
  };

  return (
    <TableRow key={product.id}>
      <TableCell
        component="th"
        scope="row"
      >
        <Box
          component="img"
          src={product.thumbnailUrl}
          alt={product.name}
          width="60px"
          height="60px"
        />
      </TableCell>
      <TableCell align="left">{product.name}</TableCell>

      <TableCell align="center">
        <Stack
          className={product.discount > 0 ? 'has-discount' : ''}
          sx={{
            '&.has-discount': {
              color: 'rgb(255, 66, 78)',
              '&>.original-price': {
                color: 'rgb(128, 128, 137)',
                textDecoration: 'line-through',
                fontSize: '14px',
                lineHeight: '20px',
              },
              '&>.current-price': {
                fontSize: 16,
                fontWeight: 600,
              },
            },
          }}
        >
          <Typography className="current-price">{currency(+product.currentPrice)}</Typography>
          <Typography className="original-price">{currency(+product.price)}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack alignItems="center">
          <AddToCart
            product={product}
            onSubmit={handleUpdateItem}
            initState={{ quantity: product.quantity }}
            actionName="Update"
          />
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleRemoveItem}
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Item;
