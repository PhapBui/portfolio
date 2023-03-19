import { Box } from '@mui/material';
import { memo } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import DashBoard from 'features/dashboard';

export interface AdminPageProps {}

function AdminPage(props: AdminPageProps) {
  return (
    <Box>
      <Routes>
        <Route
          index
          element={<DashBoard />}
        />
      </Routes>
      <Outlet />
    </Box>
  );
}
export default memo(AdminPage);
