import { Box, Card, styled, Typography } from '@mui/material';
import { ProductDetails } from 'models/product';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { createSlug } from 'utils/slug';
import { currency } from 'utils/currency';
import { ProductDiscoutBadge, ProductName, ProductPrice } from './productCardStyle';

const CardWrapper = styled(Card)(({ theme }) => ({
  position: 'relative',
}));

interface ProductCardProps {
  product: ProductDetails;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({ product }: ProductCardProps) => {
  return (
    <CardWrapper
      sx={{
        position: 'relative',
      }}
    >
      <Link to={`/product/${createSlug(product.name, product.id)}`}>
        <Box
          component="img"
          src={product.thumbnailUrl}
          alt={product.name}
          sx={{
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            p: 1,
          }}
        >
          <ProductName>{product.name}</ProductName>
          <Typography>{product.category?.name}</Typography>

          <ProductPrice
            direction="row"
            spacing={1}
            className={product.discount ? 'has-discount' : ''}
          >
            {!!(product.discount && product.discount > 0) && (
              <Typography className="current-price">
                {currency((product.price * (100 - product.discount)) / 100)}
              </Typography>
            )}

            <Typography className="original-price">{currency(+product.price)}</Typography>
          </ProductPrice>

          {!!(product.discount && product.discount > 0) && (
            <ProductDiscoutBadge>-{product.discount}%</ProductDiscoutBadge>
          )}
        </Box>
      </Link>
    </CardWrapper>
  );
};

export default React.memo(ProductCard);
