import { styled } from '@mui/material/styles';
import { memo } from 'react';
import MenuList from './Components/SidebarList';

const SidebarWrapper = styled('div')({
  width: '100%',
  maxHeight: '100vh',
  position: 'sticky',
  overflowY: 'scroll',
  top: '16px',
  backgroundColor: 'transparent',
  display: 'flex',
  paddingBottom: '117px',
  flexDirection: 'column',
  color: 'rgb(56, 56, 61)',
  lineHeight: '20px',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '& .location-icon': {
    display: 'none',
  },
  '& div.address': {
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    fontWeight: '400',
    marginBottom: '4px',
  },
});

function Sidebar() {
  return (
    <SidebarWrapper>
      <MenuList />
    </SidebarWrapper>
  );
}

export default memo(Sidebar);
