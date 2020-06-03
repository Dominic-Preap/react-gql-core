import React from 'react';

import { useAuthStore } from 'common/stores';
import { useHistory } from 'react-router-dom';
import { RoutePath } from 'common/utilities/RoutePath';

const Login = () => {
  const authStore = useAuthStore();
  const history = useHistory();

  if (authStore.logged) {
    history.push(RoutePath.dashboard);
  }

  function login() {
    authStore.updateProfile(true);
    history.push(RoutePath.dashboard);
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default Login;
