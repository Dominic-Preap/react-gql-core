import React from 'react';
import { useHistory } from 'react-router-dom';

import { useRootStore } from 'common/stores';
import { RoutePath } from 'common/utilities/RoutePath';
import { useLocalStorage } from 'common/utilities/useLocalStorage';

interface LoginModel {
  email?: string;
  password?: string;
}

export const LoginForm = () => {
  const [state, setState] = React.useState<LoginModel>({
    email: '',
    password: '',
  });
  const [, setToken] = useLocalStorage('token', '');
  const store = useRootStore();
  const history = useHistory();

  function login() {
    if (state.email === '1' && state.password === '1') {
      setToken('xxx');
      store.authStore.setLogin();
      history.push(RoutePath.dashboard);
    } else {
      // alert('wrong password');
      setState({ email: '', password: '' });
    }
  }

  return (
    <>
      <input
        value={state.email}
        name="email"
        onChange={({ target }) => setState({ ...state, email: target.value })}
      />
      <input
        value={state.password}
        name="password"
        onChange={({ target }) =>
          setState({ ...state, password: target.value })
        }
      />
      <button type="button" onClick={() => login()}>
        Login
      </button>
    </>
  );
};
