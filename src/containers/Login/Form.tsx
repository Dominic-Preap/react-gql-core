import React from 'react';

import { useAuthContext } from 'common/stores/xxx';

interface LoginModel {
  email: string;
  password: string;
  loading: boolean;
}

export const LoginForm = () => {
  const [state, setState] = React.useState<LoginModel>({
    email: '',
    password: '',
    loading: false,
  });

  const auth = useAuthContext();

  async function login() {
    setState({ ...state, loading: true });
    const result = await auth.login(state.email, state.password);

    if (!result) {
      // alert('wrong password');
      setState({ email: '', password: '', loading: false });
    }
  }
  const { email, password, loading } = state;
  return (
    <>
      <input
        value={email}
        name="email"
        onChange={({ target }) => setState({ ...state, email: target.value })}
      />
      <input
        value={password}
        name="password"
        onChange={({ target }) =>
          setState({ ...state, password: target.value })
        }
      />
      <button type="button" onClick={() => login()}>
        {loading ? 'loading...' : 'Login'}
      </button>
    </>
  );
};
