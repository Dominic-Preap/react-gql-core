import React from 'react';
import { Redirect } from 'react-router-dom';

import { useRootStore } from 'common/stores';
import { RoutePath } from 'common/utilities/RoutePath';

import { LoginForm } from './Form';

const Login = () => {
  const store = useRootStore();

  if (store.authStore.logged) {
    return <Redirect to={RoutePath.dashboard} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
