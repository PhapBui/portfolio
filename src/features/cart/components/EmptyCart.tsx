import { styled } from '@mui/material';
import { emptyCart } from 'assets/images';
import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  '&>img': {
    width: '100px',
    maxWidth: '100%',
    height: 'auto',
    display: 'flex',
    margin: '16px auto',
  },
  '&>h3': {
    margin: '15px 0px',
    ontSize: '1.6rem',
    fontWeight: '400',
    color: '#333',
  },
  '&>a': {
    backgroundColor: 'rgb(253, 216, 53)',
    color: 'rgb(74, 74, 74)',
    fontWeight: '500',
    padding: '10px 55px',
    borderRadius: '4px',
  },
});

const EmptyCart = () => {
  return (
    <Wrapper>
      <img
        // @ts-ignore
        src={emptyCart}
        alt="empty-cart"
      />
      <h3>Cart is empty</h3>
      <Link to="/">Back to Shopping</Link>
    </Wrapper>
  );
};

EmptyCart.propTypes = {};

export default EmptyCart;
