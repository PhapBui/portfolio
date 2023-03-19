import { styled } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect, memo } from 'react';
import { cartActions, selectCartItems } from '../cartSlice';
import CartListItem from './CartListItem';
import EmptyCart from './EmptyCart';

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  borderRadius: theme.spacing(0.5),
  boxShadow: '7px 4px 12px 3px #938b8b',
  padding: theme.spacing(2, 1),
  minHeight: theme.spacing(30),
  width: '100%',
}));

const Cart = () => {
  const dispatch = useAppDispatch();
  const CartList = useAppSelector(selectCartItems);
  useEffect(() => {
    dispatch(cartActions.addToCart);
  }, [dispatch]);

  const handleRemoveItem = (i: number) => {
    dispatch(cartActions.removeProductInCart(i));
  };

  return (
    <Wrapper>
      {CartList && CartList.length > 0 ? (
        <CartListItem
          removeItem={handleRemoveItem}
          productList={CartList}
        />
      ) : (
        <EmptyCart />
      )}
    </Wrapper>
  );
};

export default memo(Cart);
