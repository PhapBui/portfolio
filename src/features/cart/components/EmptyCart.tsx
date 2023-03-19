import { Box, Button, Stack, Typography } from '@mui/material';
import { emptyCart } from 'assets/images';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <Stack sx={{ textAlign: 'center' }}>
      <Box>
        <Box
          component="img"
          src={emptyCart}
          alt="empty-cart"
          sx={{
            width: '100px',
            maxWidth: '100%',
            height: 'auto',
            display: 'flex',
            margin: '16px auto',
          }}
        />
        <Typography
          variant="h5"
          sx={{
            margin: '15px 0px',
            color: '#333',
          }}
        >
          Cart is empty
        </Typography>
      </Box>
      <Box my={2}>
        <Button
          sx={{
            maxWidth: '320px',
            backgroundColor: 'rgb(253, 216, 53)',
            color: 'rgb(74, 74, 74)',
            fontWeight: '500',
            padding: '10px 55px',
            borderRadius: '4px',
          }}
        >
          <Link to="/">Back to Shopping</Link>
        </Button>
      </Box>
    </Stack>
  );
};

EmptyCart.propTypes = {};

export default EmptyCart;
