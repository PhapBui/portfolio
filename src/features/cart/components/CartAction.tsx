import { memo } from 'react';

import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Wrapper = styled('div')({
  '&>.action': {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px',
    '&>.btn-action': {
      display: 'block',
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '.97em',
      fontWeight: 'bolder',
      letterSpacing: '.03em',
      lineHeight: '2.4em',
      maxWidth: '100%',
      minHeight: '2.5em',
      padding: '0 1.2em',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      textShadow: 'none',
      textTransform: 'uppercase',
      transition: 'transform .3s,border .3s,background .3s,box-shadow .3s,opacity .3s,color .3s',
      verticalAlign: 'middle',
      marginBottom: '8px',
      '&:last-of-type': {
        marginBottom: '0',
      },
      '&.check-cart': {
        backgroundColor: '#34c1bb',
        borderColor: 'rgba(0,0,0,.05)',
        color: '#fff',
      },
      '&.check-out': {
        backgroundColor: '#d26e4b',
        borderColor: 'rgba(0,0,0,.05)',
        color: '#fff',
      },
    },
  },
});

const CartAction = () => {
  return (
    <Wrapper>
      <Box className="action">
        <Link
          className="btn-action check-cart"
          to="/cart"
        >
          Cart
        </Link>
        <Link
          className="btn-action check-out"
          to="/checkout"
        >
          Checkout
        </Link>
      </Box>
    </Wrapper>
  );
};

export default memo(CartAction);
