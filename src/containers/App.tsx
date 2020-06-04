import { useObserver } from 'mobx-react-lite';
import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { useRootStore } from 'common/stores';
import { PrivateRoute } from 'common/utilities/PrivateRoute';
import { RoutePath } from 'common/utilities/RoutePath';
import { delay } from 'common/utilities/sleep';
import { useLocalStorage } from 'common/utilities/useLocalStorage';

const Login = React.lazy(() => import('./Login'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const User = React.lazy(() => import('./User'));

function App() {
  const store = useRootStore();
  const history = useHistory();
  const location = useLocation();
  const [token] = useLocalStorage('token', '');

  React.useEffect(() => {
    async function fetchData() {
      if (token) {
        await delay(1000);
        store.authStore.setLogin();
        // history.push(location.);
      } else {
        store.authStore.setLogout();
        // history.push(RoutePath.login);
      }
    }
    fetchData();
  }, [store, history, token, location]);

  return useObserver(() => {
    if (store.authStore.loading) return <div>loading</div>;

    return (
      <div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={RoutePath.login} component={Login} />
            <PrivateRoute
              authenticated={store.authStore.getLogged()}
              path={RoutePath.dashboard}
              component={Dashboard}
            />
            <PrivateRoute
              authenticated={store.authStore.getLogged()}
              path={RoutePath.users}
              component={User}
            />
            <Redirect to={RoutePath.login} />
          </Switch>
        </React.Suspense>
      </div>
    );
  });
}

export default App;
