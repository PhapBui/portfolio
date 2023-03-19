import React, { memo } from 'react';
import { Box } from '@mui/material';

interface ProductThumbnailProps {
  thumbnailUrl: string;
}

const ProductThumbnail: React.FunctionComponent<ProductThumbnailProps> = ({ thumbnailUrl }) => {
  return (
    <Box>
      <Box
        component="img"
        src={thumbnailUrl}
        width="100%"
      />
    </Box>
  );
};

export default memo(ProductThumbnail);
