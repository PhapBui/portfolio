import { Alert, Box, Button, CircularProgress } from '@mui/material';

import { InputField, RadioGroupField, SelectField } from 'components/forms';
import React, { memo } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductDetails } from 'models/product';

const schema = yup.object().shape({
  name: yup.string().required('Thieu'),
  age: yup
    .number()
    .positive('Vui long nhap so duong')
    .integer('tuoi phai la so nguyen')
    .min(18, 'min is 18')
    .max(70, 'max is 70')
    .required('Tuoi ban oi'),
  mark: yup
    .number()
    .positive('Vui long nhap so duong')
    .min(0, 'min is 0')
    .max(10, 'max is 10')
    .required('Please enter mark'),
  gender: yup
    .string()
    .oneOf(['male', 'female'], 'please select either male or female')
    .required('Please select gender'),
  city: yup.string().required('Please select city'),
});

export interface StudentFormProps {
  initialValue?: ProductDetails;
  onSubmit?: (formValuse: ProductDetails) => void;
}
function StudentForm({ initialValue, onSubmit }: StudentFormProps) {
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
    // console.log('Submit: ', formValue);
    try {
      setError('');
      await onSubmit?.(formValue);
    } catch (error: any) {
      console.log('Failed to add/update Student: ', error);
      setError(error.message);
    }
  };
  return (
    <>
      <Box maxWidth={300}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputField
            name="name"
            control={control}
            label="Full Name"
          />
          <InputField
            name="age"
            control={control}
            type="number"
            label="Age"
          />
          <InputField
            name="mark"
            control={control}
            type="number"
            label="Mark"
          />

          {/* Gender */}
          <RadioGroupField
            name="gender"
            control={control}
            label="Gender"
            options={[]}
          />

          {/* City */}
          {[1].length > 0 && (
            <SelectField
              options={[]}
              name="city"
              control={control}
              label="City"
            />
          )}

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
        </form>
      </Box>
    </>
  );
}
export default memo(StudentForm);
