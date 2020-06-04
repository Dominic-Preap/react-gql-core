import { useObserver } from 'mobx-react-lite';
import React from 'react';

import { useCharacterStore } from 'common/stores';

const UnSelectCharacter = () => {
  const store = useCharacterStore();

  return useObserver(() => {
    if (!store.unselectedCharacters.length) {
      return <div>No data</div>;
    }

    return (
      <div>
        {store.unselectedCharacters.map((x) => (
          <div key={x!.name!}>
            <img width={100} src={x!.image!} alt={x?.name!} />
            <p>{x?.name}</p>
            <button type="button" onClick={() => store.select(x.id)}>
              Select
            </button>
          </div>
        ))}
      </div>
    );
  });
};

export default UnSelectCharacter;
