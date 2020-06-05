import React from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use/esm/useLocalStorage';

import { RoutePath, sleep } from 'common/utils';

interface User {
  id: number;
  name: string;
}

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthData extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthData>({} as AuthData);
export const useAuthContext = () => React.useContext(AuthContext);

export const AuthProvider: React.FC = (props) => {
  const history = useHistory();
  const [token, setToken, removeToken] = useLocalStorage('Token', '');
  const [state, setState] = React.useState<AuthState>({
    isLoading: true,
    isAuthenticated: false,
    user: null,
  });

  async function login(email: string, password: string) {
    setState({ ...state, isAuthenticated: false, isLoading: true });

    const isAuthenticated = email === '1' && password === '1';
    isAuthenticated ? setToken('xxx') : removeToken();

    setState({
      ...state,
      isAuthenticated: false,
      isLoading: false,
      user: { id: 1, name: 'My User' },
    });
    return isAuthenticated;
  }

  async function logout() {
    removeToken();
    setState({ ...state, isAuthenticated: false });
    history.push(RoutePath.login);
  }

  React.useEffect(() => {
    const removeAuth = () => {
      removeToken();
      setState({ isLoading: false, isAuthenticated: false, user: null });
    };

    const initializeAuth = async () => {
      // If Auth token not exist, remove token and set authenticate false
      if (!token) {
        removeAuth();
        return;
      }

      await sleep(2000); // ! Function check if user is valid

      if (token === 'xxx') {
        const user: User = { id: 1, name: 'My Name' };
        setToken(token);
        setState({ isLoading: false, isAuthenticated: true, user });
      } else {
        removeAuth();
      }
    };

    initializeAuth();
  }, [token, setToken, removeToken]);

  const { isLoading, isAuthenticated, user } = state;
  return (
    <AuthContext.Provider
      value={{ isLoading, isAuthenticated, user, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
