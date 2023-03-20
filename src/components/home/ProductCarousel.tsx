import { Box, Stack, Typography } from '@mui/material';
import Slick from 'components/common/Carousel/Slick';
import ProductCard from 'components/product/productCard';
import { ProductDetails } from 'models/product';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface CategoryListProps {
  title?: string;
  itemList?: ProductDetails[];
  readmore?: boolean;
  readmoreUrl?: string;
}

const CategoryList: React.FunctionComponent<CategoryListProps> = ({
  title,
  itemList,
  readmore,
  readmoreUrl,
}: CategoryListProps) => {
  if (!itemList) return null;
  const settings = {
    dots: true,
    infinite: itemList.length > 6,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: itemList.length > 4,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: itemList.length > 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Box
      component="section"
      py={1.5}
      px={2}
      mt={2}
      bgcolor={'white'}
      borderRadius={2}
      sx={{
        '& .slick-slider': {
          marginBottom: '30px',
          '& .slick-dots': {
            bottom: '-30px',
          },
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ px: 1, py: 2 }}
      >
        <Typography
          component="h2"
          variant="h5"
        >
          {title}
        </Typography>
        {readmore && (
          <div className="readmore">
            <Link to={readmoreUrl || '/'}>Read more</Link>
          </div>
        )}
      </Stack>
      <Box>
        <Slick setting={settings}>
          {itemList.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </Slick>
      </Box>
    </Box>
  );
};

export default React.memo(CategoryList);
