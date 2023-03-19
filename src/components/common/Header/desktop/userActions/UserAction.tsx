import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HomeIcon from '@mui/icons-material/Home';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { memo, useMemo } from 'react';
import TippyHeadless from '@tippyjs/react/headless';

import { Cart } from 'features/cart';
import { useAppSelector } from 'app/hooks';
import { selectCartItems } from 'features/cart/cartSlice';

const MenuNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  color: 'inherit',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: '2px',
  position: 'relative',
  '&.active': {
    color: 'rgb(10, 104, 255)',
    fontWeight: 500,
    lineHeight: '150%',
  },
  '&.active:hover': {
    backgroundColor: 'rgba(0, 96, 255, 0.12)',
  },
  '&:hover': {
    backgroundColor: 'rgba(39, 39, 42, 0.12)',
  },
  '&>.store': {
    color: 'rgb(10, 104, 255)',
  },
}));

function UserShortcut() {
  const CartList = useAppSelector(selectCartItems);
  const productsQty = useMemo(() => {
    if (CartList && CartList.length > 0) return CartList?.reduce((a, b) => a + b.quantity, 0);
    return 0;
  }, [CartList]);
  return (
    <Stack
      sx={{
        flexDirection: { lg: 'row', md: 'column', xs: 'column' },
      }}
    >
      <MenuNavLink to="/">
        <HomeIcon />
        Home
      </MenuNavLink>
      <MenuNavLink to="/admin/product">
        <FaceRetouchingNaturalIcon />
        Admin
      </MenuNavLink>
      <TippyHeadless
        placement="bottom-end"
        interactive
        maxWidth={320}
        render={(attrs) => <Cart />}
      >
        <MenuNavLink
          to="/cart"
          sx={{ display: { lg: 'inline-flex', md: 'none', xs: 'none' } }}
        >
          <LocalGroceryStoreOutlinedIcon className="store" />
          <Typography
            sx={{
              color: ' rgb(255, 255, 255)',
              background: ' rgb(255, 66, 79)',
              height: '16px',
              right: '0px',
              top: '-4px',
              borderRadius: ' 8px',
              display: 'inline-block',
              fontWeight: 700,
              textAlign: 'center',
              fontSize: ' 10px',
              lineHeight: '150%',
              position: 'absolute',
              padding: '0.5px 4px',
            }}
            component="span"
          >
            {productsQty}
          </Typography>
        </MenuNavLink>
      </TippyHeadless>
    </Stack>
  );
}

export default memo(UserShortcut);
