import { useContext, createContext } from 'react';
import AuthStore from './AuthStore';


export const StoreContext = createContext<AuthStore>({} as AuthStore);
export const StoreProvider = StoreContext.Provider;

export const useAuthStore = (): AuthStore => useContext(StoreContext);
