import { Box, Container, Stack } from '@mui/material';

import { memo } from 'react';
import Logo from './components/Logo';
import Search from './components/Search';
import UserActions from './components/UserAction';

function Header() {
  return (
    <Box
      sx={{ py: 2 }}
      component="header"
      bgcolor="white"
    >
      <Container>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo />
          {/* Search */}
          <Search />

          {/* User actions */}
          <UserActions />
        </Stack>
      </Container>
    </Box>
  );
}
export default memo(Header);
