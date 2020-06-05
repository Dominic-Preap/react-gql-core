import React from 'react';

export const Card: React.FC = ({ children }) => (
  <div className="bg-white border shadow-md overflow-hidden">{children}</div>
);
