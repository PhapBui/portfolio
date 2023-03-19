import * as React from 'react';
import HeaderDesktop from './desktop/HeaderDesktop';
import HeaderMobile from './mobile';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};

export default Header;
