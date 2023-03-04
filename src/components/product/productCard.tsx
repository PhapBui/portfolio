import * as React from 'react';
import { Card } from '@mui/material';

interface ProductCardProps {}

const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
  return <Card>Product card</Card>;
};

export default React.memo(ProductCard);
