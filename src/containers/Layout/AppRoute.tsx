import React from 'react';
import { RouteProps, Switch, Redirect } from 'react-router-dom';

import { useAuthContext } from 'common/context';
import { PrivateRoute, RoutePath } from 'common/utils';

const routes: RouteProps[] = [
  {
    path: RoutePath.dashboard,
    component: React.lazy(() => import('../Dashboard')),
  },
  {
    path: RoutePath.users,
    component: React.lazy(() => import('../User')),
  },
  {
    path: RoutePath.notFound,
    component: React.lazy(() => import('../NotFound')),
  },
];

/**
 * React Router routes for the entire app.
 */
export const AppRoutes = () => {
  const auth = useAuthContext();
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route, index) => (
          <PrivateRoute
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            authenticated={auth.isAuthenticated}
            {...route}
          />
        ))}
        <Redirect
          to={auth.isAuthenticated ? RoutePath.notFound : RoutePath.login}
        />
      </Switch>
    </React.Suspense>
  );
};
