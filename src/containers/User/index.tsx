import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';

import { Characters } from 'common/graphql/generates';

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const User = () => {
  const { loading, error, data } = useQuery<Characters>(GET_CHARACTERS);
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
  if (data?.results?.length) {
    return (
      <div className="characters">
        {data.results.map((x) => (
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
