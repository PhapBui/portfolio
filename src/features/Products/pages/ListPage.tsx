import { Link } from 'react-router-dom';
// import studentApi from 'api/studentApi';
import { Box, Button, LinearProgress, Pagination, Typography } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import ProductTable from '../components/ProductTable';
import ProductFilters from '../components/ProductFilters';
import { loadingProduct } from '../productSlice';
import { selectProductList } from './../productSlice';
import { memo } from 'react';

function ListPage() {
  const loading = useAppSelector(loadingProduct);
  const productList = useAppSelector(selectProductList);

  return (
    <Box>
      {/* Loading */}
      {loading && <LinearProgress />}
      <Box>
        <Typography variant="h4">Products</Typography>
        <Button>
          <Link to={''}>Add new Product</Link>
        </Button>
      </Box>

      {/* Filter */}
      <Box mb={3}>
        <ProductFilters />
      </Box>

      {/* Product table list */}
      <ProductTable productList={productList} />

      {/* Pagination */}
      <Box mt={2}>
        <Pagination
          color="primary"
          count={productList.length}
          page={2}
        />
      </Box>
    </Box>
  );
}
export default memo(ListPage);
