import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, PeopleAlt } from '@mui/icons-material';
import { memo } from 'react';

interface Item {
  icon: any;
  path: any;
  title: any;
}
interface SidebarItemProps {
  item: Item;
}

function Sidebar() {
  const data: Item[] = [
    {
      title: 'Product',
      path: 'product',
      icon: <Dashboard />,
    },
    {
      title: 'DashBoard',
      path: 'dashboard',
      icon: <PeopleAlt />,
    },
  ];
  return (
    <Box>
      <List
        component="nav"
        aria-label="main mailbox folders"
      >
        {data.map((item) => (
          <SidebarItem
            item={item}
            key={item.path}
          />
        ))}
      </List>
    </Box>
  );
}

function SidebarItem({ item }: SidebarItemProps) {
  return (
    <NavLink to={`/admin/${item.path}`}>
      <ListItem>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </NavLink>
  );
}

export default memo(Sidebar);
