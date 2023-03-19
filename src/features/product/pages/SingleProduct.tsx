import { Box, Divider, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import AddToCart from 'features/cart/components/AddToCart';
import { productActions } from 'features/product/productSlice';
import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import { selectProduct } from '../productSlice';
import { ProductDetails } from 'models/product';
import { cartActions } from 'features/cart/cartSlice';

interface SingleProductProps {}

const SingleProduct: React.FunctionComponent<SingleProductProps> = (props) => {
  const [productId, setProductId] = useState<string>();
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setProductId(params.productId);
  }, [params.productId]);

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
            direction="row"
            spacing={2}
          >
            <Box
              sx={{
                width: { lg: '50%' },
              }}
            >
              <ProductThumbnail thumbnailUrl={product.thumbnailUrl} />
            </Box>
            <Divider
              orientation="vertical"
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
