import React, { memo } from 'react';
import { Stack, Box } from '@mui/material';
import ProductCard from 'components/product/productCard';

interface ProductGalleyProps {}

const ProductGalley: React.FunctionComponent<ProductGalleyProps> = (props) => {
  const a = [];
  for (let i = 0; i < 42; ++i) {
    a.push(i);
  }
  return (
    <Box
      component="section"
      mt={2}
    >
      <Stack
        sx={{
          justifyContent: 'space-between',
          flexFlow: 'row wrap',
          gap: 1,
        }}
      >
        {a.map((a) => (
          <Box
            key={a}
            sx={{
              width: {
                lg: 'calc(100% / 6 - 8px)',
                md: 'calc(100% / 4 - 8px)',
                xs: 'calc(100% / 2 - 8px)',
              },
              maxWidth: {
                lg: 'calc(100% / 6 - 8px)',
                md: 'calc(100% / 4 - 8px)',
                xs: 'calc(100% / 2 - 8px)',
              },
              flexBasis: {
                lg: 'calc(100% / 6 - 8px)',
                md: 'calc(100% / 4 - 8px)',
                xs: 'calc(100% / 2 - 8px)',
              },
            }}
          >
            <ProductCard />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default memo(ProductGalley);
