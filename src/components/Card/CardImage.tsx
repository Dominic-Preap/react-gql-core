import React from 'react';

export const CardImage: React.FC<{ url: string }> = ({ url }) => (
  <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${url})` }} />
);
