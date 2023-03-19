import { memo } from 'react';
import { Box, Breadcrumbs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function BasicBreadcrumbs() {
  const location = useLocation();
  const path = location.pathname;
  const pathArray = path.split('/').filter((part) => part?.trim() !== '');
  if (pathArray.length === 0) return null;
  return (
    <Box
      role="presentation"
      mb={2}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          to="/"
        >
          Home
        </Link>
        {pathArray &&
          pathArray.length > 0 &&
          pathArray.map((path, idx) => {
            const prePath = pathArray.slice(0, idx);
            return (
              <Link
                color="inherit"
                to={prePath?.length > 0 ? `/${prePath?.join('/')}/${path}` : `/${path}`}
                key={idx}
              >
                {path}
              </Link>
            );
          })}
      </Breadcrumbs>
    </Box>
  );
}
export default memo(BasicBreadcrumbs);
