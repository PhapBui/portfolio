import { Box, Paper, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Bill, ItemList } from 'components/cart';
import BillAction from 'components/cart/Bill/BillAction';
import { cartActions, selectCartItems } from 'features/cart/cartSlice';
import EmptyCart from 'features/cart/components/EmptyCart';
import { memo, useEffect } from 'react';

export interface AboutPageProps {}

function CartPage(props: AboutPageProps) {
  const dispatch = useAppDispatch();
  const CartList = useAppSelector(selectCartItems);
  useEffect(() => {
    dispatch(cartActions.addToCart);
  }, [dispatch]);

  return (
    <Box>
      <Stack sx={{ justifyContent: 'center' }}>
        {CartList && CartList.length > 0 ? (
          <Stack
            sx={{
              flexDirection: { xl: 'row', lg: 'row', md: 'column', xs: 'column' },
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: '60%',
              }}
            >
              <ItemList />
            </Box>
            <Box
              component={Paper}
              sx={{
                flexBasis: '40%',
                m: { lg: '0 0 0 16px', md: '16px 0 0 0' },
              }}
            >
              <Bill />
              <BillAction />
            </Box>
          </Stack>
        ) : (
          <EmptyCart />
        )}
      </Stack>
    </Box>
  );
}
export default memo(CartPage);
