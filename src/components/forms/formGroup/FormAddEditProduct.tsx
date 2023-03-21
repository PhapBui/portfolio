import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import { ProductDetails } from 'models/product';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { InputField, TextAreaField } from 'components/forms/formFields';
export interface FormAddEditProductProps {
  onSubmit?: (payload: ProductDetails) => void;
  initialFormAddEditProductValue?: ProductDetails;
}

function FormAddEditProduct({ onSubmit, initialFormAddEditProductValue }: FormAddEditProductProps) {
  const schema = yup.object().shape({
    name: yup.string().required('Please enter product name!'),
    price: yup
      .number()
      .min(1, 'Min price much greater than 0')
      .required('Please enter product price!'),
    quantity: yup
      .number()
      .min(1, 'Min price much greater than 0')
      .required('Please enter product quantity!'),
    discount: yup
      .number()
      .min(0, 'discount min is 0')
      .max(100, 'discount max is 100')
      .notRequired(),
    thumbnailUrl: yup.string().required('Please enter product thumbnail url!'),
    description: yup.string().required('Please enter product description!'),
  });

  const [error, setError] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProductDetails>({
    defaultValues: initialFormAddEditProductValue,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleFormSubmit = async (formValue: ProductDetails) => {
    try {
      await onSubmit?.(formValue);
    } catch (error: any) {
      console.log('Failed to add/update Product: ', error);
      setError(error.message);
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="name" control={control} label="Product Name" />
      <InputField name="price" control={control} label="Product Price" />
      <InputField name="quantity" control={control} label="Product Quantity" />
      <InputField name="discount" control={control} label="Discount" />
      <InputField name="thumbnailUrl" control={control} label="Thumbnail Url" />

      <TextAreaField name="description" control={control} label="Description" />

      {error && <Alert severity="error">{error}</Alert>}
      <Box>
        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting && <CircularProgress size={16} />} Save
        </Button>
      </Box>
    </Box>
  );
}
export default memo(FormAddEditProduct);
