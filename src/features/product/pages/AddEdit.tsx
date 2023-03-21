import { ChevronLeft } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import productApi from 'api/productApi';
import { FormAddEditProduct } from 'components/forms/formGroup';
import { ProductDetails } from 'models/product';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createSlug } from 'utils/slug';

export default function AddEditPage() {
  const [product, setProduct] = useState<ProductDetails>();

  const mountedRef = useRef(true);

  const { productId } = useParams<{ productId: string }>();

  const location = useLocation();
  const navigate = useNavigate();

  const isAddPage = location.pathname === '/product/add';
  const isEdit = Boolean(productId);

  const fetchProduct = useCallback(
    async (productId: number | string) => {
      if (!productId) return;
      try {
        const response: ProductDetails = await productApi.getById(productId);
        if (!mountedRef.current) return null;
        setProduct(response);
      } catch (error) {
        console.log('Failed to fetch product details: ', error);
      }
    },
    [mountedRef]
  );

  useEffect(() => {
    if (!productId && !isAddPage) {
      return navigate('/admin/product');
    }
    if (productId) fetchProduct(productId);
    return () => {
      mountedRef.current = false;
    };
  }, [productId, navigate, fetchProduct, isAddPage]);

  const handleProductFormSubmit = async (formValue: ProductDetails) => {
    const newData = formValue;
    newData.currentPrice = (newData.price * (100 - newData.discount)) / 100;
    newData.slug = createSlug(newData.name, newData.id);
    try {
      if (isEdit) {
        newData.updatedAt = new Date().getTime();
        await productApi.update(newData);
        toast.success('Update product successfully!');
      } else {
        newData.createdAt = new Date().getTime();
        newData.updatedAt = new Date().getTime();
        await productApi.add(newData);
        toast.success('Add new product successfully!');
      }
    } catch (error) {
      toast.error('Cannot excuted this action pls try again!');
    }

    await navigate('/admin/product');
  };

  const initialValue: ProductDetails = {
    id: '',
    name: '',
    slug: '',

    thumbnailUrl: '',
    price: 0,
    quantity: 0,
    discount: 0,
    currentPrice: 0,
    category: { productQty: 1 },
    description: 'Chua co mo ta',
    createdAt: '',
    updatedAt: '',

    ...product,
  };
  return (
    <>
      <Box>
        <Link to="/admin/product">
          <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
            <ChevronLeft>Back to ProductDetails List</ChevronLeft>
          </Typography>
        </Link>
        <Typography variant="h4">
          {!isEdit ? 'Add new ProductDetails' : 'Update ProductDetails info'}
        </Typography>
      </Box>

      {(!isEdit || Boolean(product)) && (
        <Box>
          <FormAddEditProduct
            initialFormAddEditProductValue={initialValue}
            onSubmit={handleProductFormSubmit}
          />
        </Box>
      )}
    </>
  );
}
