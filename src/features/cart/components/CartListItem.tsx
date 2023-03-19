import { useMemo, memo } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import { Box, Typography, Stack } from '@mui/material';
import { ProductDetails } from 'models/product';
import { Link } from 'react-router-dom';
import { currency } from 'utils/currency';
import CartItem from './CartItem';
import CartAction from './CartAction';

interface CartListItemProps {
  productList: ProductDetails[];
  removeItem: (number: number) => void;
}

const CartListItem = ({ productList, removeItem }: CartListItemProps) => {
  const totalBill = (cartList: ProductDetails[]): number => {
    if (cartList && cartList.length > 0) {
      return cartList.reduce((a, b) => {
        if (b.discount) {
          return a + (b.price * b.quantity * (100 - b?.discount)) / 100;
        } else {
          return a + b.price * b.quantity;
        }
      }, 0);
    } else {
      return 0;
    }
  };

  const handleCancleItem = (i: number) => {
    removeItem(i);
  };

  const totalPrice = useMemo(() => currency(totalBill(productList)), [productList]);

  return (
    <Box>
      {productList &&
        productList.length > 0 &&
        productList.map((item, idx) => (
          <CartItem key={idx}>
            <Box sx={{ width: 60, height: 60, flexBasis: '60px' }}>
              <Box
                component={'img'}
                sx={{
                  aspectRatio: '1',
                  width: '60px',
                  maxWidth: '100%',
                }}
                src={item.thumbnailUrl}
                alt={item.name}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: '170px',
              }}
            >
              <Link
                to={`/product/${item.id}`}
                style={{
                  overflow: 'hidden',
                  minHeight: '36px',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }}
              >
                <Typography
                  component="h3"
                  variant="subtitle1"
                  sx={{ wordBreak: ' break-word' }}
                >
                  {item.name}
                </Typography>
              </Link>
              <Typography>
                {item.discount
                  ? currency((item.price * (100 - item.discount)) / 100)
                  : currency(item.price)}{' '}
                <ClearIcon fontSize="small" /> {item.quantity}
              </Typography>
            </Box>
            <Box
              className="cancle"
              onClick={() => handleCancleItem(idx)}
            >
              <ClearIcon />
            </Box>
          </CartItem>
        ))}
      <Stack
        direction="row"
        p={2}
        my={2}
        sx={{
          borderBottom: '2px solid rgb(242, 242, 242)',
          borderTop: '2px solid rgb(242, 242, 242)',
          justifyContent: 'center',
        }}
      >
        <Typography
          mr={1}
          sx={{
            fontWeight: 600,
            textDecoration: 'underline',
          }}
        >
          Total:
        </Typography>
        <Typography
          sx={{
            color: 'red',
            fontWeight: 600,
          }}
        >{` ${totalPrice}`}</Typography>
      </Stack>
      <CartAction />
    </Box>
  );
};

export default memo(CartListItem);
