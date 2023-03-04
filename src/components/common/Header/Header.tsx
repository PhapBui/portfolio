import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <Box component="header">
      <Stack
        direction="row"
        sx={{ justifyContent: 'space-between' }}
      >
        <Box>
          <Link to="/">GO home</Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>Search actions</Box>
        <Box>User Actions</Box>
      </Stack>
    </Box>
  );
}
