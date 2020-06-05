import React from 'react';

interface CardProfileAProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const CardProfileA: React.FC<CardProfileAProps> = ({
  imageUrl,
  title,
  subtitle,
}) => (
  <div className="p-4">
    <div className="flex items-center">
      <div
        className="bg-cover bg-center w-12 h-12 rounded-full mr-3"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="flex-1 flex justify-between">
        <div>
          <p className="font-bold text-gray-800">{title}</p>
          <p className="text-sm text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  </div>
);
