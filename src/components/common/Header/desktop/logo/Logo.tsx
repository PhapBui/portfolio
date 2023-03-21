import { styled } from '@mui/material';
import { NikeLogo } from 'assets/images';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {}

const LogoWrapper = styled('div')({
  height: '40px',
  '&>a': {
    display: 'inline-flex',
    '&>img': {
      display: 'block',
      width: 'auto',
      height: '40px',
    },
  },
});

const Logo: React.FunctionComponent<LogoProps> = (props) => {
  return (
    <LogoWrapper>
      <Link to="/">
        <img src={NikeLogo} alt="shop" />
      </Link>
    </LogoWrapper>
  );
};

export default memo(Logo);
