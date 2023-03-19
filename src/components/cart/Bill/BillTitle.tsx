import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';

interface BillProps {}

const BillTitle: React.FunctionComponent<BillProps> = (props) => {
  return (
    <Box>
      <Typography
        variant="h4"
        textAlign="center"
      >
        Your Orders
      </Typography>
    </Box>
  );
};

export default memo(BillTitle);
