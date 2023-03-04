import { FC } from 'react';
import { LayoutProps } from 'models/common';

export interface RoutesConfig {
  path: string;
  component: FC;
  layout?: FC<LayoutProps>;
}
