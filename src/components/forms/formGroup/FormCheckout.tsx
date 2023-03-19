import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  directoryActions,
  selectDistrictOption,
  selectProviceOption,
  selectWardOption,
} from 'features/directory/directorySlice';
import { CustomerInfo } from 'models/email';
import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { phoneRegExp } from 'utils/regExp';
import * as yup from 'yup';
import { TextAreaField } from '../formFields';
import { InputField, SelectField } from 'components/forms/formFields';
export interface FormCheckoutProps {
  onSubmit?: (payload: CustomerInfo) => void;
  initCustomer?: CustomerInfo;
}

function FormCheckout({ onSubmit, initCustomer }: FormCheckoutProps) {
  const dispatch = useAppDispatch();
  const listProvice = useAppSelector(selectProviceOption);
  const listDistrict = useAppSelector(selectDistrictOption);
  const listWard = useAppSelector(selectWardOption);
  useEffect(() => {
    dispatch(directoryActions.getProvice());
  }, [dispatch]);

  const schema = yup.object().shape({
    customer_name: yup
      .string()
      .min(3, 'Must be a meaningful name')
      .required('Please enter your name'),
    email: yup.string().email('Must be a valid email').required('Please enter your email'),
    phonenumber: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(3, 'Please')
      .required('Please enter your phonenumber'),
    address: yup.string().min(8, 'Must be a valid address').required('Please enter your address'),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    resetField,
  } = useForm<CustomerInfo>({
    defaultValues: initCustomer,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  async function handleLoginSubmit(payload: CustomerInfo) {
    await onSubmit?.(payload);
  }

  const { proviceId, districtId, ward } = watch();

  useEffect(() => {
    if (proviceId) {
      resetField('ward');
      resetField('districtId');
      dispatch(directoryActions.getDistrict(proviceId));
    }
  }, [dispatch, proviceId, resetField]);

  useEffect(() => {
    resetField('ward');
    if (districtId) dispatch(directoryActions.getWard(districtId));
  }, [dispatch, proviceId, districtId, resetField]);

  useEffect(() => {
    resetField('address');
    if (ward) dispatch(directoryActions.getWardById(ward));
  }, [dispatch, ward, resetField]);
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <InputField
        name="customer_name"
        label="Your Name"
        control={control}
      />
      <InputField
        name="email"
        label="Your Email"
        control={control}
      />
      <InputField
        name="phonenumber"
        label="Your Phonenumber"
        control={control}
      />
      <Stack direction="row">
        <SelectField
          name="proviceId"
          label="Provice"
          control={control}
          options={[{ label: 'Provice', value: 0 }, ...listProvice]}
        />
        <SelectField
          name="districtId"
          label="District"
          control={control}
          options={[{ label: 'District', value: 0 }, ...listDistrict]}
        />
      </Stack>
      <Stack direction="row">
        <SelectField
          name="ward"
          label="Ward"
          control={control}
          options={[{ label: 'Ward', value: 0 }, ...listWard]}
        />
        <InputField
          name="address"
          label="Your Address"
          control={control}
        />
      </Stack>
      <TextAreaField
        rows={4}
        name="note"
        label="Note"
        control={control}
      />
      <Button
        startIcon={isSubmitting && <CircularProgress />}
        disabled={isSubmitting}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ my: 2 }}
      >
        Order
      </Button>
    </Box>
  );
}
export default memo(FormCheckout);
