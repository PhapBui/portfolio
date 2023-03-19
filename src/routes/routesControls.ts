import { AdminLayout, EmptyLayout, NoSideBarLayout } from 'components/layouts';
import { pathConfig } from 'config';
import Category from 'features/category';
import { Counter } from 'features/counter';
import DashBoard from 'features/dashboard';
import Product from 'features/product';
import AddEditPage from 'features/product/pages/AddEdit';
import SingleProduct from 'features/product/pages/SingleProduct';
import { RoutesConfig } from 'models';
import {
  AboutPage,
  AdminPage,
  CartPage,
  CategoryPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
} from 'pages';

const publicRoutes: RoutesConfig[] = [
  { path: pathConfig.root, element: HomePage, layout: NoSideBarLayout },
  { path: pathConfig.counter, element: Counter },
  {
    path: pathConfig.product,
    element: ProductPage,
    layout: NoSideBarLayout,
    child: [
      { path: 'add', element: AddEditPage },
      { path: 'edit/:productId', element: AddEditPage },
      { path: ':productId', element: SingleProduct },
    ],
  },
  {
    path: pathConfig.category,
    element: CategoryPage,
    layout: EmptyLayout,
    child: [
      { path: 'add', element: AddEditPage },
      { path: 'edit/:categoryId', element: AddEditPage },
      // { path: ':categoryId', element: SingleProduct },
    ],
  },
  { path: pathConfig.about, element: AboutPage, layout: NoSideBarLayout },
  { path: pathConfig.cart, element: CartPage, layout: NoSideBarLayout },
  {
    path: pathConfig.admin,

    element: AdminPage,
    layout: AdminLayout,
    child: [
      { path: 'product', element: Product },
      { path: 'dashboard', element: DashBoard, index: true },
      { path: 'categories', element: Category },
    ],
  },
  { path: pathConfig.checkout, element: CheckoutPage, layout: NoSideBarLayout },
  { path: pathConfig.login, element: LoginPage, layout: NoSideBarLayout },
  { path: pathConfig.notFound, element: NotFoundPage, layout: EmptyLayout },
];

const privateRoutes: RoutesConfig[] = [
  {
    path: '',
    element: HomePage,
  },
];

export { publicRoutes, privateRoutes };
