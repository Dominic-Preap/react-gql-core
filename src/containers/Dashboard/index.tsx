import React from 'react';
import useSWR from 'swr';

import { getPostsFetcher } from 'common/utils';

const Dashboard = () => {
  const { data, error } = useSWR('unique-key', getPostsFetcher);

  const P = ({ post }: any) => (
    <p key={post.id}>
      {post.id} + {post.title}
    </p>
  );

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <h2>{error.message}</h2>}
      {data ? data.map((x) => <P key={x.id} post={x} />) : 'Loading...'}
    </div>
  );
};

export default Dashboard;
