import React from 'react';

interface CardProfileBProps {
  imageUrl: string;
  title: string;
  name: string;
  email: string;
  phone: string;
}

export const CardProfileB: React.FC<CardProfileBProps> = ({ imageUrl, title, name, email, phone }) => (
  <div className="bg-gray-100 px-4 pt-3 pb-4">
    <div className="text-xs uppercase font-bold text-gray-700 tracking-wide">{title}</div>
    <div className="flex items-center pt-2">
      <div className="bg-cover bg-center w-16 h-16 rounded-lg mr-3" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div>
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-sm text-gray-700">{email}</p>
        <p className="text-sm text-gray-700">{phone}</p>
      </div>
    </div>
  </div>
);
