import { Alert, Box, Button, CircularProgress } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from 'components/forms/formFields';
import { ProductDetails } from 'models/product';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({});

export interface ProductFormProps {
  initialValue?: ProductDetails;
  onSubmit?: (formValue: ProductDetails) => void;
}
function ProductForm({ initialValue, onSubmit }: ProductFormProps) {
  const [error, setError] = React.useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProductDetails>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
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
    <>
      <Box maxWidth={300}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputField name="name" control={control} label="Full Name" />
          <InputField name="price" control={control} type="number" label="Price" />
          <InputField name="quantity" control={control} type="number" label="Quantity" />

          {/* Gender */}
          <InputField name="thumbnailUrl" control={control} label="Thumbnail Url" />

          {/* City */}

          <InputField name="description" control={control} label="Description" />

          {error && <Alert severity="error">{error}</Alert>}
          <Box>
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting && <CircularProgress size={16} />} Save
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
export default memo(ProductForm);
