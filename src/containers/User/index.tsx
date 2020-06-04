import React from 'react';

import { useGetCharactersQuery } from 'common/graphql/generates';
import { useCharacterStore } from 'common/stores';

import SelectCharacter from './components/SelectCharacter';
import UnSelectCharacter from './components/UnSelectCharacter';

const User = () => {
  const { loading, error, data } = useGetCharactersQuery();
  const store = useCharacterStore();

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!data?.characters?.results?.length) {
    return <div>No data</div>;
  }

  const d = data?.characters?.results.map((x) => ({
    id: x!.id,
    image: x!.image,
    name: x!.name,
  }));
  store.add(d as any);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <UnSelectCharacter />
      </div>
      <div>
        <SelectCharacter />
      </div>
    </div>
  );
};

export default User;
