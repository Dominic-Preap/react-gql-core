import React from 'react';

import { useGetCharactersQuery } from 'common/graphql/generates';

const User = () => {
  const { loading, error, data } = useGetCharactersQuery();
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (data?.characters?.results?.length) {
    return (
      <div className="characters">
        {data?.characters?.results.map((x) => (
          <div key={x!.name!} className="character">
            <img src={x!.image!} alt={x?.name!} />
            <p>{x?.name}</p>
          </div>
        ))}
      </div>
    );
  }
  return <div>No data</div>;
};

export default User;
