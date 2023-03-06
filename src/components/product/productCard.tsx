import * as React from 'react';
import { Card, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { currency } from 'utils/currency';

interface ProductCardProps {}

const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
  const x = 9000;
  return (
    <Card>
      <Link to="/">
        <Box
          component="img"
          src="https://salt.tikicdn.com/cache/280x280/ts/product/61/95/6f/9d123840cd7ead9c1912c1a801a4908b.jpg.webp"
          alt="Bao da vo op lung"
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
          <Typography
            component="h3"
            variant="h6"
          >
            Bao da vo op lung
          </Typography>
          <Typography>{currency(x)}</Typography>
        </Box>
      </Link>
    </Card>
  );
};

export default React.memo(ProductCard);
