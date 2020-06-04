import React from 'react';

import RootStore from './RootStore';

export const RootStoreContext = React.createContext<RootStore>({} as RootStore);
export const useRootStore = () => React.useContext(RootStoreContext);
export { RootStore };
