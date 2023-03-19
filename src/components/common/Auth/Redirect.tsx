import { Box, Button, CircularProgress, Container, Stack, Typography, Paper } from '@mui/material';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/common/Header';
import { Footer } from 'components/common/Footer';

interface RedirectProps {
  progress: number;
  timer: number;
}

const Redirect: React.FunctionComponent<RedirectProps> = ({ progress, timer }: RedirectProps) => {
  return (
    <Box>
      <Container>
        <Stack minHeight={'100vh'}>
          <Header />
          <Box
            flexGrow={1}
            component={Paper}
            textAlign="center"
            mt={2}
          >
            <Stack
              alignItems="center"
              spacing={2}
            >
              <Typography
                component="h3"
                variant="h5"
              >
                You need login for allow access this page
              </Typography>
              <CircularProgress
                variant="determinate"
                value={progress}
              />
              <Button variant="contained">
                <Link to="/login">Redirect to Login Page in {timer}</Link>
              </Button>
            </Stack>
          </Box>
          <Footer />
        </Stack>
      </Container>
    </Box>
  );
};

export default memo(Redirect);
