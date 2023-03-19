import { useAppSelector } from 'app/hooks';
import { selectCurrentUser } from 'features/auth/authSlice';
import { LayoutProps } from 'models/common';
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Redirect from './Redirect';

function Auth({ children }: LayoutProps) {
  const time = 5;

  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(time);

  const navaigate = useNavigate();
  const currentuser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((preTimer) => preTimer - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, time * 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!currentuser?.name) {
      const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
        navaigate('/login');
      }, time * 1000);
      return () => clearTimeout(timer);
    }
  }, [currentuser?.name, navaigate]);

  if (!currentuser)
    return (
      <Redirect
        progress={progress}
        timer={timer}
      />
    );
  return <div>{children}</div>;
}
export default memo(Auth);
