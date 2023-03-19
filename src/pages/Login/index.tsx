import LoginPage from 'features/auth/pages/LoginPage';
import { memo } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'utils/firebase';

export interface LogInPageProps {}

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function LogInPage(props: LogInPageProps) {
  return (
    <div>
      <h1>LogInPage</h1>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
      <LoginPage />
    </div>
  );
}
export default memo(LogInPage);
