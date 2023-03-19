import { useAppDispatch } from 'app/hooks';
import { MainLayout } from 'components/layouts';
import { EmptyLayout } from 'components/layouts/EmptyLayout/Empty';
import { getMe } from 'features/auth/authSlice';
import 'firebase/compat/auth';
import { LayoutProps } from 'models/common';
import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from 'routes';
import firebase from 'utils/firebase';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return;
      }
      const action = getMe();
      dispatch(action);
    });

    return () => unregisterAuthObserver();
  }, [dispatch]);
  return (
    <>
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
                      index={child.index}
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
    </>
  );
}

export default App;
