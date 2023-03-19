import { Box, Typography } from '@mui/material';

import { memo } from 'react';

function SearchSuggestion() {
  return (
    <Box sx={{ minHeight: 200, p: 2 }}>
      <Typography>No products match... Please enter new keyword</Typography>
    </Box>
  );
}

export default memo(SearchSuggestion);
