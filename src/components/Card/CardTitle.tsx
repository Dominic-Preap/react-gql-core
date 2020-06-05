import React from 'react';

export const CardTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="p-4">
    <p className="text-2xl text-gray-900">{title}</p>
    <p className="text-gray-700">{subtitle}</p>
  </div>
);
