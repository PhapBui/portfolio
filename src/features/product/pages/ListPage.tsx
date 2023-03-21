import { Link } from 'react-router-dom';
// import productApi from 'api/productApi';
import { Box, Button, LinearProgress, Pagination, Stack, Typography } from '@mui/material';
import productApi from 'api/productApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { productActions } from 'features/product/productSlice';
import { ProductDetails } from 'models/product';
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductTable from '../components/ProductTable';
import { loadingProduct, productFilter, selectHotdeal, selectPagination } from '../productSlice';
import { toast } from 'react-toastify';

function ListPage() {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  const filter = useAppSelector(productFilter);
  const loading = useAppSelector(loadingProduct);
  const productList = useAppSelector(selectHotdeal);
  const pagination = useAppSelector(selectPagination);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productActions.fetchHotDeal(filter));
    dispatch(productActions.fetchAllProduct());
  }, [dispatch, filter]);

  useEffect(() => {
    dispatch(productActions.setFilter({ page: page }));
  }, [dispatch, page]);

  const hanleRemoveProduct = async (product: ProductDetails) => {
    try {
      await productApi.remove(product.id);
      const newFilter = { ...filter };
      dispatch(productActions.setFilter(newFilter));
      toast.success('Remove product successfully!');
    } catch (error) {
      toast.error('Cannot excuted this action pls try again!');
    }
  };

  const handleEditProduct = (product: ProductDetails) => {
    navigate(`/product/edit/${product.id}`);
  };

  const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      {/* Loading */}
      {loading && <LinearProgress />}
      <Stack
        direction={'row'}
        justifyContent="space-between"
        bgcolor="white"
        p={1}
        mb={0.5}
        borderRadius={0.5}
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Typography variant="h4">Products</Typography>
        <Button variant="outlined">
          <Link to={'/product/add'}>Add new Product</Link>
        </Button>
      </Stack>

      <ProductTable
        productList={productList}
        onRemove={hanleRemoveProduct}
        onEdit={handleEditProduct}
      />

      {/* Pagination */}
      <Box mt={2}>
        <Pagination color="primary" count={pagination.count} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
}
export default memo(ListPage);
