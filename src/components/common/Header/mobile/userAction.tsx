import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton } from '@mui/material';
import { memo, useState } from 'react';
import UserAction from '../desktop/userActions/UserAction';

function UserActionMobile() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        sx={{
          width: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <IconButton
          onClick={handleDrawerClose}
          sx={{ justifyContent: 'flex-start' }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <UserAction />
      </Drawer>
    </Box>
  );
}
export default memo(UserActionMobile);
