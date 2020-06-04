import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL, // URL of the GraphQL server
  credentials: 'same-origin',
  request: async (operation) => {
    operation.setContext({
      headers: { authorization: 'randomToken' },
    });
  },
});
