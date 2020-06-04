import { useLocalStore } from 'mobx-react-lite';
import React from 'react';

import CharacterStore from './CharacterStore';

interface Store {
  characterStore: CharacterStore;
}

export const StoreContext = React.createContext<Store>({} as Store);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(() => ({
    characterStore: new CharacterStore(),
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

export const useCharacterStore = () =>
  React.useContext(StoreContext).characterStore;
