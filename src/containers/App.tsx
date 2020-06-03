import React from 'react';

import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { RoutePath } from 'common/utilities/RoutePath';
import { PrivateRoute } from 'common/utilities/PrivateRoute';
import { useAuthStore } from 'common/stores';
import { useObserver } from 'mobx-react-lite';
import { delay } from 'common/utilities/sleep';

const Login = React.lazy(() => import('./Login'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const User = React.lazy(() => import('./User'));

function App() {
  const authStore = useAuthStore();
  const history = useHistory();

  React.useEffect(() => {
    async function fetchData() {
      await delay(3000);
      authStore.checkProfile();
      history.push(RoutePath.login);
    }
    fetchData();
  }, [authStore, history]);

  return useObserver(() => {
    if (authStore.loading) return <div>loading</div>;

    return (
      <div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={RoutePath.login} component={Login} />
            <PrivateRoute authenticated={authStore.logged} path={RoutePath.dashboard} component={Dashboard} />
            <PrivateRoute authenticated={authStore.logged} path={RoutePath.users} component={User} />
            <Redirect from={RoutePath.login} to={RoutePath.login} />
          </Switch>
        </React.Suspense>
      </div>
    );
  });
}

export default App;
