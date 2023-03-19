import { Box, Button } from '@mui/material';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface BillProps {}

const BillAction: React.FunctionComponent<BillProps> = (props) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button
        variant="contained"
        color="success"
        sx={{ color: 'white', my: 2 }}
      >
        <Link to="/checkout">Checkout</Link>
      </Button>
    </Box>
  );
};

export default memo(BillAction);
