import React from 'react';
import { useHistory } from 'react-router-dom';

import { RoutePath } from 'common/utils/RoutePath';
import { sleep } from 'common/utils/sleep';
import { useLocalStorage } from 'common/utils/useLocalStorage';

interface AuthData {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: any;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthData>({} as AuthData);
export const useAuthContext = () => React.useContext(AuthContext);

export const AuthProvider: React.FC = (props) => {
  const [state, setState] = React.useState({
    isLoading: true,
    isAuthenticated: false,
    user: null,
  });

  const [token, setToken] = useLocalStorage('Token', '');
  const history = useHistory();

  async function login(email: string, password: string) {
    setState({ ...state, isAuthenticated: false, isLoading: true });

    const isAuthenticated = email === '1' && password === '1';
    setToken(isAuthenticated ? 'xxx' : null);
    setState({ ...state, isAuthenticated: false, isLoading: false });
    return isAuthenticated;
  }

  async function logout() {
    setToken(null);
    setState({ ...state, isAuthenticated: false });
    history.push(RoutePath.login);
  }

  React.useEffect(() => {
    const initializeAuth = async () => {
      if (!token) {
        setState({ isLoading: false, isAuthenticated: false, user: null });
        return;
      }

      await sleep(2000);
      const isAuthenticated = token === 'xxx';
      // const user = isAuthenticated ? { email: 'xxx@xx.com' } : null;
      setState({ isLoading: false, isAuthenticated, user: null });
    };
    initializeAuth();
  }, [token]);

  const { isLoading, isAuthenticated, user } = state;
  return (
    <AuthContext.Provider
      value={{ isLoading, isAuthenticated, user, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
