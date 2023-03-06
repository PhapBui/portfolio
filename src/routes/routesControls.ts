import { Counter } from 'features/counter';
import { RoutesConfig } from 'models';
import { pathConfig } from 'config';
import {
  HomePage,
  ProductPage,
  AboutPage,
  CartPage,
  CheckoutPage,
  NotFoundPage,
  AdminPage,
  SignInPage,
} from 'pages';
import { NoSideBarLayout, EmptyLayout, AdminLayout } from 'components/layouts';
import DashBoard from 'features/DashBoard';
import Product from 'features/Products';

const publicRoutes: RoutesConfig[] = [
  { path: pathConfig.root, element: HomePage },
  { path: pathConfig.counter, element: Counter },
  { path: pathConfig.products, element: ProductPage, layout: EmptyLayout },
  { path: pathConfig.about, element: AboutPage, layout: NoSideBarLayout },
  { path: pathConfig.cart, element: CartPage, layout: NoSideBarLayout },
  {
    path: pathConfig.admin,
    element: AdminPage,
    layout: AdminLayout,
    child: [
      { path: 'product', element: Product },
      { path: 'dashboard', element: DashBoard },
    ],
  },
  { path: pathConfig.checkout, element: CheckoutPage, layout: NoSideBarLayout },
  { path: pathConfig.signin, element: SignInPage, layout: NoSideBarLayout },
  { path: pathConfig.notFound, element: NotFoundPage, layout: EmptyLayout },
];

const privateRoutes: RoutesConfig[] = [
  {
    path: '',
    element: HomePage,
  },
];

export { publicRoutes, privateRoutes };
