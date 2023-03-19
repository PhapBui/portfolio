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
  const schema = yup.object().shape({});

  const [error, setError] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProductDetails>({
    defaultValues: initialFormAddEditProductValue,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValue: ProductDetails) => {
    try {
      await onSubmit?.(formValue);
    } catch (error: any) {
      console.log('Failed to add/update Student: ', error);
      setError(error.message);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <InputField
        name="name"
        control={control}
        label="Product Name"
      />
      <InputField
        name="price"
        control={control}
        label="Product Price"
      />
      <InputField
        name="quantity"
        control={control}
        label="Product Quantity"
      />
      <InputField
        name="discount"
        control={control}
        label="Discount"
      />
      <InputField
        name="thumbnailUrl"
        control={control}
        label="Thumbnail Url"
      />

      <TextAreaField
        name="description"
        control={control}
        label="Description"
      />

      {error && <Alert severity="error">{error}</Alert>}
      <Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && <CircularProgress size={16} />} Save
        </Button>
      </Box>
    </Box>
  );
}
export default memo(FormAddEditProduct);
