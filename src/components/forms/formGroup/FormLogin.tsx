import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import { ProductDetails } from 'models/product';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { InputField } from 'components/forms/formFields';
export interface LoginFormProps {
  onSubmit?: (payload: ProductDetails) => void;
  initialLoginFormValue?: ProductDetails;
}

function LoginForm({ onSubmit, initialLoginFormValue }: LoginFormProps) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Please enter username')
      .min(1, 'Username is required to have at least 4 characters'),
    password: yup
      .string()
      .required('Please enter password')
      .min(6, 'Password is required to have at least 4 characters'),
  });

  const [showPassword, setShowPasswork] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProductDetails>({
    defaultValues: initialLoginFormValue,
    resolver: yupResolver(schema),
  });

  async function handleLoginSubmit(payload: ProductDetails) {
    await onSubmit?.(payload);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <InputField
        name="name"
        label="Product name"
        control={control}
      />
      <InputField
        name="thumbnailUrl"
        label="Product Thumbnail Url"
        control={control}
      />
      <InputField
        name="price"
        label="Product Price"
        control={control}
      />
      <InputField
        name="quantity"
        label="Product Quantity"
        control={control}
      />
      <InputField
        name="category"
        label="Product Category"
        control={control}
      />
      <InputField
        name="description"
        label="Product Description"
        control={control}
      />
      <InputField
        type={showPassword ? 'text' : 'password'}
        name="password"
        label="Password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPasswork((x) => !x)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        startIcon={isSubmitting && <CircularProgress />}
        disabled={isSubmitting}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ my: 2 }}
      >
        Login
      </Button>
    </Box>
  );
}
export default memo(LoginForm);
