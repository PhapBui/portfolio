import { Box, Button, CircularProgress, Paper } from '@mui/material';
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
    <div>
      {isLoggedIn && (
        <Navigate
          replace
          to="/admin/dashboard"
        />
      )}
      <Paper elevation={1}>
        <Box mt={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
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
      </Paper>
    </div>
  );
}
