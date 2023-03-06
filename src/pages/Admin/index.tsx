import { Box } from '@mui/material';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

export interface AdminPageProps {}

function AdminPage(props: AdminPageProps) {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
export default memo(AdminPage);
