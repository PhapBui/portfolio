import { Box, Stack, Container } from '@mui/material';
import Footer from 'components/common/Footer/Footer';
import Header from 'components/common/Header';
import Sidebar from 'components/admin/sidebar';
import Auth from 'components/common/Auth/auth';
import BasicBreadcrumbs from 'components/common/breadcrumb';
export interface AdminLayoutProps {
  children: any;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Auth>
      <Box>
        <Stack
          minHeight="100vh"
          bgcolor={'#efefef'}
        >
          <Box>
            <Header />
          </Box>

          <Box
            flexGrow={1}
            mt={2}
          >
            <Container fixed>
              <BasicBreadcrumbs />
              <Stack direction="row">
                <Box sx={{ display: { md: 'none', xs: 'none' } }}>
                  <Sidebar />
                </Box>

                <Box flexGrow={1}>{children}</Box>
              </Stack>
            </Container>
          </Box>
          <Box>
            <Footer />
          </Box>
        </Stack>
      </Box>
    </Auth>
  );
}
