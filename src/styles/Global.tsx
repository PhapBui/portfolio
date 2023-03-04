import React from 'react';

import './GlobalStyle.scss';
import { LayoutProps } from 'models/common';

function GlobalStyle({ children }: LayoutProps) {
  return <>{children}</>;
}

export default GlobalStyle;
