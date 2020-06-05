import React from 'react';

interface CardDualIconProps {
  firstIcon: any;
  firstTitle: string;
  secondIcon: any;
  secondTitle: string;
}

export const CardDualIcon: React.FC<CardDualIconProps> = ({
  firstIcon: First,
  firstTitle,
  secondIcon: Second,
  secondTitle,
}) => (
  <div className="flex border-t border-b border-gray-300 text-gray-700 text-center">
    <div className="flex-1 inline-flex items-center justify-center p-2 border-r border-gray-300">
      {First && <First size={35} className="pr-3 text-lg" />}
      <p>{firstTitle}</p>
    </div>
    <div className="flex-1 inline-flex items-center justify-center p-2">
      {Second && <Second size={35} className="pr-3" />}
      <p>{secondTitle}</p>
    </div>
  </div>
);
