import React, { memo } from 'react';
import { Box, Typography, styled, Stack } from '@mui/material';
import { currency } from 'utils/currency';

interface ProductInfoProps {
  name: string;
  price: number;
  description?: string;
  discount: number | 0;
}

const Item = styled('div')(({ theme }) => ({
  borderBottom: '1px solid rgb(242, 242, 242)',
  padding: theme.spacing(2, 0),
  '&>.has-discount': {
    color: 'rgb(255, 66, 78)',
    '&>.original-price': {
      color: 'rgb(128, 128, 137)',
      textDecoration: 'line-through',
      fontSize: '14px',
      lineHeight: '20px',
    },
    '&>.current-price': {
      fontSize: theme.spacing(4),
      lineHeight: theme.spacing(5),
      fontWeight: 600,
    },
  },
  '&:last-of-type': {
    borderBottom: 'none',
  },
}));

const ProductInfo: React.FunctionComponent<ProductInfoProps> = ({
  name,
  price,
  description,
  discount,
}) => {
  return (
    <Box>
      <Item>
        <Typography
          component="h3"
          variant="h4"
        >
          {name}
        </Typography>
      </Item>
      <Item>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            pt: 1.5,
            alignItems: 'flex-end',
          }}
          className={discount ? 'has-discount' : ''}
        >
          {discount > 0 && (
            <Typography className="current-price">
              {currency((price * (100 - discount)) / 100)}
            </Typography>
          )}

          <Typography className="original-price">{currency(+price)}</Typography>

          {discount > 0 && <Typography>-{discount}%</Typography>}
        </Stack>
      </Item>
      <Item>{description}</Item>
    </Box>
  );
};

export default memo(ProductInfo);
