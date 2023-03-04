import { Counter } from 'features/counter';
import { RoutesConfig } from 'models';
import { pathConfig } from 'config';
import { HomePage, ProductPage, AboutPage, CartPage, CheckoutPage, NotFoundPage } from 'pages';
import { EmptyLayout } from 'components/layouts/EmptyLayout/Empty';
import NoSidebarLayout from 'components/layouts/NoSidebarLayout/NoSidebarLayout';

const publicRoutes: RoutesConfig[] = [
  { path: pathConfig.root, component: HomePage },
  { path: pathConfig.counter, component: Counter },
  { path: pathConfig.products, component: ProductPage, layout: EmptyLayout },
  { path: pathConfig.about, component: AboutPage, layout: NoSidebarLayout },
  { path: pathConfig.cart, component: CartPage, layout: NoSidebarLayout },
  { path: pathConfig.checkout, component: CheckoutPage, layout: NoSidebarLayout },
  { path: pathConfig.notFound, component: NotFoundPage, layout: EmptyLayout },
];

const privateRoutes: RoutesConfig[] = [
  {
    path: '',
    component: HomePage,
  },
];

export { publicRoutes, privateRoutes };
