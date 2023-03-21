import { Box, Divider, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { cartActions } from 'features/cart/cartSlice';
import AddToCart from 'features/cart/components/AddToCart';
import { productActions } from 'features/product/productSlice';
import { ProductDetails } from 'models/product';
import React, { memo, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductIdFromPath } from 'utils/slug';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import { selectProduct } from '../productSlice';

interface SingleProductProps {}

const SingleProduct: React.FunctionComponent<SingleProductProps> = (props) => {
  const location = useLocation();

  const productId = useMemo(() => getProductIdFromPath(location.pathname), [location]);

  const dispatch = useAppDispatch();

  const product = useAppSelector(selectProduct);

  useEffect(() => {
    if (productId) dispatch(productActions.fetchSingleProduct(productId));
  }, [dispatch, productId]);

  const handleUpdateCart = (product: ProductDetails) => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <Box>
      <Container>
        <Box
          sx={{
            backgroundColor: '#fff',
            p: 2,
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              flexDirection: { lg: 'row', xs: 'column' },
            }}
          >
            <Box
              sx={{
                width: { lg: '50%' },
              }}
            >
              <ProductThumbnail thumbnailUrl={product.thumbnailUrl} />
            </Box>
            <Divider
              sx={{ mx: '16px', display: { lg: 'block', xs: 'none' } }}
              orientation="vertical"
              flexItem
            />
            <Divider
              sx={{ my: '16px', display: { lg: 'none', xs: 'block' } }}
              orientation="horizontal"
              flexItem
            />
            <Box
              sx={{
                width: { lg: '50%' },
              }}
            >
              <ProductInfo
                name={product.name}
                price={product.price}
                description={product.description}
                discount={product.discount || 0}
              />
              <Typography>
                Stock: <span style={{ color: 'red' }}>{product.quantity}</span>
              </Typography>
              <Box>
                <AddToCart
                  product={product}
                  onSubmit={handleUpdateCart}
                  initState={{ quantity: 1 }}
                  actionName="Add to Cart"
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(SingleProduct);
