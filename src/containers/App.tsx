import 'mobx-react-lite/batchingForReactDom';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuthContext } from 'common/context';
import { PrivateRoute, RoutePath } from 'common/utils';

const Login = React.lazy(() => import('./Login/Login'));
const Layout = React.lazy(() => import('./Layout'));

function App() {
  const auth = useAuthContext();

  if (auth.isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={RoutePath.login} component={Login} />
        <PrivateRoute
          authenticated={auth.isAuthenticated}
          path="/"
          component={Layout}
        />
        <Redirect
          to={auth.isAuthenticated ? RoutePath.dashboard : RoutePath.login}
        />
      </Switch>
    </React.Suspense>
  );
}

export default App;
