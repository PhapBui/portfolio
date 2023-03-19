import React, { memo, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import ProductCard from 'components/product/productCard';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { productActions, productFilter, selectGalleyList } from 'features/product/productSlice';

interface ProductGalleyProps {}

const ProductGalley: React.FunctionComponent<ProductGalleyProps> = (props) => {
  const dispatch = useAppDispatch();
  const ProductList = useAppSelector(selectGalleyList);
  const filter = useAppSelector(productFilter);
  useEffect(() => {
    const newFilter = { ...filter, limit: 24 };
    dispatch(productActions.fetchGalley(newFilter));
  }, [dispatch, filter]);

  return (
    <Box
      component="section"
      mt={2}
    >
      <Box>
        <Typography
          component="h2"
          variant="h5"
          px={2}
          sx={{
            padding: '12px 16px',
            backgroundColor: 'white',
            lineHeight: '150%',
            textTransform: 'unset',
            marginBottom: '0px',
            marginTop: '16px',
            borderRadius: '8px 8px 0px 0px',
          }}
        >
          Maybe You Like
        </Typography>
      </Box>
      <Stack
        sx={{
          flexFlow: 'row wrap',
          mx: -0.5,
        }}
      >
        {ProductList.map((product) => (
          <Box
            key={product.id}
            sx={{
              width: {
                lg: 'calc(100% / 6 )',
                md: 'calc(100% / 4 )',
                xs: 'calc(100% / 2 )',
              },
              maxWidth: {
                lg: 'calc(100% / 6 )',
                md: 'calc(100% / 4 )',
                xs: 'calc(100% / 2 )',
              },
              flexBasis: {
                lg: 'calc(100% / 6 )',
                md: 'calc(100% / 4 )',
                xs: 'calc(100% / 2 )',
              },
              p: 0.5,
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default memo(ProductGalley);
