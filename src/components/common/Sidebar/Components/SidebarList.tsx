import { styled } from '@mui/material/styles';
import SidebarItem from './SidebarItem';
import { memo } from 'react';

const List = styled('div')(({ theme }) => ({
  width: '100%',
  padding: ' 12px 8px',
  backgroundColor: '#fff',
  borderRadius: theme.spacing(1),

  marginBottom: '16px',

  color: 'rgb(128, 128, 137)',
  '& .MuiSvgIcon-root': {
    fontSize: '2.6rem',
  },
  '&> .title': {
    color: 'rgb(39, 39, 42)',
    marginBottom: '8px',
    paddingLeft: '16px',
    fontSize: '1.4rem',
    fontWeight: 700,
    lineHeight: '150%',
  },
}));

function SidebarList() {
  const data = [];
  for (let i = 0; i < 32; ++i) {
    data.push(i);
  }
  return (
    <List>
      {data.map((item) => {
        return <SidebarItem key={item} />;
      })}
    </List>
  );
}

export default memo(SidebarList);
