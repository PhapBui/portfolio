import { Box, Paper, Stack } from '@mui/material';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Bill } from 'components/cart';
import PayOption from 'components/checkout/PayOption';
import { renderCheckoutMailContent } from 'components/email';
import FormCheckout from 'components/forms/formGroup/FormCheckout';
import { cartActions, selectCartItems } from 'features/cart/cartSlice';
import { selectDirectory } from 'features/directory/directorySlice';
import { CustomerInfo } from 'models/email';
import { SendEmail } from 'utils/email';
import emailApi from './../../api/emailApi';
export interface CheckoutPageProps {}

function CheckoutPage(props: CheckoutPageProps) {
  const initCustomer: CustomerInfo = {
    customer_name: '',
    email: '',
    phonenumber: '',
    address: '',
    proviceId: 0,
    districtId: 0,
    ward: 0,
    note: '',
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartList = useAppSelector(selectCartItems);
  const addresss = useAppSelector(selectDirectory);

  const handleSubmitFormCheckout = async (data: CustomerInfo) => {
    data.address = data.address + ',  ' + addresss;
    const emailContent = renderCheckoutMailContent({
      content: data,
      data: cartList,
    });
    const templateParams = {
      content: emailContent,
      from_name: 'Phap',
      user_email: data.email,
      reply_to: 'bvphap.tk@gmail.com',
    };
    const a = await emailApi.sendEmail(templateParams);
    console.log(a);

    // dispatch(cartActions.emptyCart());
    // navigate('/');
  };

  const sendmail = async (content: {}) => {
    const a = await SendEmail('template_checkout', content);
    console.log(a);

    return;
  };
  return (
    <div>
      <h1>Checkout Page</h1>
      <Stack direction="row" spacing={2}>
        <Box
          component={Paper}
          p={2}
          sx={{
            flexBasis: { lg: '60%', md: '100%' },
          }}
        >
          <FormCheckout onSubmit={handleSubmitFormCheckout} initCustomer={initCustomer} />
        </Box>
        <Stack
          component={Paper}
          p={2}
          sx={{
            flexBasis: { lg: '40%', md: '100%' },
          }}
        >
          <Box>
            <Bill />
          </Box>
          <Box my={4}>
            <PayOption />
          </Box>
        </Stack>
      </Stack>
    </div>
  );
}
export default memo(CheckoutPage);
