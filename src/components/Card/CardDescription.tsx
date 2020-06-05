import React from 'react';

export const CardDescription: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="p-4">
    <div className="pb-2 text-xs uppercase font-bold text-gray-700 tracking-wide">{title}</div>
    <p className="text-gray-700 text-sm">{text}</p>
  </div>
);
