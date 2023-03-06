import LoginPage from 'features/auth/pages/LoginPage';
import React, { memo } from 'react';

export interface SignInPageProps {}

function SignInPage(props: SignInPageProps) {
  return (
    <div>
      <h1>SignInPage</h1>
      <LoginPage />
    </div>
  );
}
export default memo(SignInPage);
