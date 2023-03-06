import { Box, Stack, Container } from '@mui/material';
import Footer from 'components/common/Footer/Footer';
import Header from 'components/common/Header/Header';
import { Sidebar } from 'components/profile/sidebar';
export interface AdminLayoutProps {
  children: any;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box>
        <Container fixed>
          <Stack direction="row">
            <Sidebar />
            <Box flexGrow={1}>{children}</Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
