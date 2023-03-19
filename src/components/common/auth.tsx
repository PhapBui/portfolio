import { useAppSelector } from 'app/hooks';
import { selectCurrentUser } from 'features/auth/authSlice';
import { LayoutProps } from 'models/common';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth({ children }: LayoutProps) {
  const navaigate = useNavigate();

  const currentuser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentuser?.name) navaigate('/login');
  }, [currentuser?.name, navaigate]);

  if (!currentuser) return <div>loading</div>;
  return <div>{children}</div>;
}
export default Auth;
