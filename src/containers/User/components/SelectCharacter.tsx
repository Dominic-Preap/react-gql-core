import { useObserver } from 'mobx-react-lite';
import React from 'react';

import { useCharacterStore } from 'common/stores';

const SelectCharacter = () => {
  const store = useCharacterStore();

  return useObserver(() => {
    if (!store.selectedCharacters.length) {
      return <div>No data</div>;
    }

    return (
      <div>
        {store.selectedCharacters.map((x) => (
          <div key={x!.name!}>
            <img width={100} src={x!.image!} alt={x?.name!} />
            <p>{x?.name}</p>
            <button type="button" onClick={() => store.unselect(x.id)}>
              Un-Select
            </button>
          </div>
        ))}
      </div>
    );
  });
};

export default SelectCharacter;
