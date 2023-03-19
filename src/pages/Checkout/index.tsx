import { Box, Paper, Stack } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { Bill } from 'components/cart';
import PayOption from 'components/checkout/PayOption';
import { renderCheckoutMailContent } from 'components/email';
import FormCheckout from 'components/forms/formGroup/FormCheckout';
import { CustomerInfo } from 'models/email';
import { memo } from 'react';
import { SendEmail } from 'utils/email';
import { selectCartItems } from 'features/cart/cartSlice';

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
  };

  const cartList = useAppSelector(selectCartItems);

  const handleSubmitFormCheckout = (data: CustomerInfo) => {
    const emailContent = renderCheckoutMailContent({ userName: 'Phap', data: cartList });
    console.log(data, emailContent);
    return;

    sendmail(emailContent);
    console.log(data);
  };

  const sendmail = (content: string) => {
    SendEmail('template_checkout', content);
  };
  return (
    <div>
      <h1>Checkout Page</h1>
      <Stack
        direction="row"
        spacing={2}
      >
        <Box
          component={Paper}
          p={2}
          sx={{
            flexBasis: { lg: '60%', md: '100%' },
          }}
        >
          <FormCheckout
            onSubmit={handleSubmitFormCheckout}
            initCustomer={initCustomer}
          />
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
