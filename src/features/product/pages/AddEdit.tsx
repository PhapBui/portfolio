import { ChevronLeft } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import productApi from 'api/productApi';
import { FormAddEditProduct } from 'components/forms/formGroup';
import { ProductDetails } from 'models/product';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createSlug } from 'utils/createSlug';

export default function AddEditPage() {
  const { productId } = useParams<{ productId: string }>();
  const isEdit = Boolean(productId);

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDetails>();

  useEffect(() => {
    if (!productId) return;
    (async () => {
      try {
        const response: ProductDetails = await productApi.getById(productId);
        setProduct(response);
      } catch (error) {
        console.log('Failed to fetch student details: ', error);
      }
    })();
  }, [productId]);

  const handleStudentFormSubmit = async (formValue: ProductDetails) => {
    const newData = formValue;
    newData.currentPrice = (newData.price * (100 - newData.discount)) / 100;
    newData.slug = createSlug(newData.name, newData.id);
    if (isEdit) {
      newData.updatedAt = new Date().getTime();
      await productApi.update(newData);
    } else {
      newData.createdAt = new Date().getTime();
      newData.updatedAt = new Date().getTime();
      await productApi.add(newData);
    }
    // throw new Error('Loi roi');
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
          <Typography
            variant="caption"
            style={{ display: 'flex', alignItems: 'center' }}
          >
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
            onSubmit={handleStudentFormSubmit}
          />
        </Box>
      )}
    </>
  );
}
