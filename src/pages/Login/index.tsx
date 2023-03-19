import LoginPage from 'features/auth/pages/LoginPage';
import { memo } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'utils/firebase';
import { Box } from '@mui/material';

export interface LogInPageProps {}

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  signInSuccessUrl: '/admin/product',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function LogInPage(props: LogInPageProps) {
  return (
    <Box p={2}>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
      <LoginPage />
    </Box>
  );
}
export default memo(LogInPage);
