import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, PeopleAlt } from '@mui/icons-material';
import { memo } from 'react';

export const Sidebar = memo(function Sidebar() {
  return (
    <Box>
      <List
        component="nav"
        aria-label="main mailbox folders"
      >
        <NavLink to="/admin/product">
          <ListItem>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Product" />
          </ListItem>
        </NavLink>
        <NavLink to="/admin/dashboard">
          <ListItem>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );
});
