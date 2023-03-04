import * as React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface CategoryCardProps {}

const CategoryCard: React.FunctionComponent<CategoryCardProps> = (props) => {
  const categoryDetails = {
    id: 1,
    name: 'Quan ao nam',
    url: 'ao nam',
    thumbnailUrl:
      'https://salt.tikicdn.com/cache/750x750/ts/product/af/4f/e1/9b5d2266b87a6712df8397f97444a553.jpg.webp',
    description: 'Bo suu tap quan ao nam',
  };
  return (
    <Box sx={{ p: 1 }}>
      <Card>
        <Link to={'/'}>
          <img
            src={categoryDetails.thumbnailUrl}
            alt={categoryDetails.name}
          />
          <Typography
            component="h4"
            variant="h6"
            sx={{ textAlign: 'center', fontSize: '1.4rem' }}
          >
            {categoryDetails.name}
          </Typography>
        </Link>
      </Card>
    </Box>
  );
};

export default React.memo(CategoryCard);
