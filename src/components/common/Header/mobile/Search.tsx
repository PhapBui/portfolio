import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Drawer, IconButton } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import Search from '../desktop/search/Search';
import { useLocation } from 'react-router-dom';

function SearchMobile() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(handleDrawerClose, [location.pathname]);

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: 'none' }) }}
      >
        <SearchIcon />
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
        <Box
          sx={{
            position: 'relative',
            '& div:has(div.search-result)': {
              width: '100%',
            },
          }}
        >
          <Search />
        </Box>
      </Drawer>
    </Box>
  );
}
export default memo(SearchMobile);
