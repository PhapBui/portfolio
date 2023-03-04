import { Stack, Box, Typography } from '@mui/material';
import Slick from 'components/common/Carousel/Slick';
import CategoryCard from 'components/product/categoryCard';
import { CategoryDetails, ProductDetails } from 'models/product';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface CategoryListProps {
  title?: string;
  itemList?: CategoryDetails[] | ProductDetails[];
  readmore?: boolean;
  readmoreUrl?: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

const CategoryList: React.FunctionComponent<CategoryListProps> = ({
  title,
  itemList,
  readmore,
  readmoreUrl,
}: CategoryListProps) => {
  // if (!itemList) return null;
  return (
    <Box component="section">
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
          {[1, 2, 3, 4, 5, 6, 7].map((a) => (
            <CategoryCard key={a} />
          ))}
        </Slick>
      </Box>
    </Box>
  );
};

export default React.memo(CategoryList);
