import { styled } from '@mui/material';
import { logo } from 'assets/images';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {}

const LogoWrapper = styled('div')({
  width: '57px',
  height: '40px',
  '&>a': {
    display: 'inline-flex',
    '&>img': {
      display: 'block',
      width: '100%',
      height: '100%',
    },
  },
});

const Logo: React.FunctionComponent<LogoProps> = (props) => {
  return (
    <LogoWrapper>
      <Link to="/">
        <img
          src={logo}
          alt="shop"
        />
      </Link>
    </LogoWrapper>
  );
};

export default memo(Logo);
