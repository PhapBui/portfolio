import { Box, Button, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Navigate } from 'react-router-dom';
import { authAction } from '../authSlice';

export default function LoginPage() {
  const dispatch = useAppDispatch();

  const isLogging = useAppSelector((state) => state.auth.logging);
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  const handleLoginClick = () => {
    dispatch(
      authAction.login({
        username: '',
        password: '',
      })
    );
  };
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      {isLoggedIn && (
        <Navigate
          replace
          to="/admin/product"
        />
      )}

      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          direction: 'ltr',
          fontWeight: '500',
          height: 'auto',
          lineHeight: 'normal',
          maxWidth: '220px',
          minHeight: '40px',
          padding: '8px 16px',
          textAlign: 'left',
          width: '100%',
        }}
        onClick={handleLoginClick}
      >
        {isLogging && (
          <CircularProgress
            size={20}
            color="secondary"
          />
        )}
        Fake Login
      </Button>
    </Box>
  );
}
