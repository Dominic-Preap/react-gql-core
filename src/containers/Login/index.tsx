import React from 'react';
import { Redirect } from 'react-router-dom';

import { useAuthContext } from 'common/context';
import { RoutePath } from 'common/utils';

import { LoginForm } from './Form';

const Login = () => {
  const auth = useAuthContext();

  if (auth.isAuthenticated) {
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
