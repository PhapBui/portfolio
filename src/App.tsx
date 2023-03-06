import { MainLayout } from 'components/layouts';
import { EmptyLayout } from 'components/layouts/EmptyLayout/Empty';
import { LayoutProps } from 'models/common';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from 'routes';
import './App.css';
function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        let Layout: FC<LayoutProps> = MainLayout;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = EmptyLayout;
        }
        const Page = route.element;
        const { child } = route;

        return (
          <Route
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
            key={index}
          >
            {child &&
              child.map((child) => {
                const El = child.element;
                return (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={<El />}
                  />
                );
              })}
          </Route>
        );
      })}
    </Routes>
  );
}

export default App;
