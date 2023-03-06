import { FC } from 'react';
import { LayoutProps } from 'models/common';

export interface Route {
  path: string;
  element: FC;
}
export interface RouteChild extends Route {
  child?: Route[];
}

export interface RoutesConfig extends RouteChild {
  layout?: FC<LayoutProps>;
}
