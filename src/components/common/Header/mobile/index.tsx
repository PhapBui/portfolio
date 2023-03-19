import { Box, Container, Stack } from '@mui/material';
import { memo } from 'react';
import Logo from '../desktop/logo/Logo';
import UserActionMobile from './userAction';
import SearchMobile from './Search';
function HeaderMobile() {
  return (
    <Box
      sx={{ py: 2, display: { lg: 'none', md: 'block', xs: 'block' } }}
      component="header"
      bgcolor="white"
    >
      <Container fixed>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box flexGrow={1}>
            <Logo />
          </Box>
          <Box px={1}>
            <SearchMobile />
          </Box>
          <Box px={1}>
            <UserActionMobile />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
export default memo(HeaderMobile);
