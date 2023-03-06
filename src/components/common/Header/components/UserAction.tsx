import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HomeIcon from '@mui/icons-material/Home';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

const UserShortcutContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '48px',
}));

const MenuNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  padding: '6px 16px',
  borderRadius: theme.spacing(1),
  color: 'inherit',
  display: 'flex',
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
  '&>.item-qty': {
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
  },
}));

function UserShortcut() {
  return (
    <UserShortcutContainer>
      <MenuNavLink to="/">
        <HomeIcon />
        Home
      </MenuNavLink>
      <MenuNavLink to="/admin">
        <FaceRetouchingNaturalIcon />
        User
      </MenuNavLink>
      <MenuNavLink to="/cart">
        <LocalGroceryStoreOutlinedIcon className="store" />
        <span className="item-qty">{'0'}</span>
      </MenuNavLink>
    </UserShortcutContainer>
  );
}

export default memo(UserShortcut);
