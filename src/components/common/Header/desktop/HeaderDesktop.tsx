import { Box, Container, Stack } from '@mui/material';

import { memo } from 'react';
import Logo from './logo/Logo';
import Search from './search/Search';
import UserActions from './userActions/UserAction';

function HeaderDesktop() {
  return (
    <Box
      sx={{ py: 2, display: { lg: 'block', md: 'none', xs: 'none' } }}
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
          <Box mr={6}>
            <Logo />
          </Box>
          <Box
            sx={{
              position: 'relative',
              flexGrow: 1,
              border: '1px solid #dfdfdf',
              borderRadius: 2,
              '& div:has(div.search-result)': {
                width: '100%',
              },
            }}
          >
            <Search />
          </Box>
          <Box ml={6}>
            <UserActions />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
export default memo(HeaderDesktop);
