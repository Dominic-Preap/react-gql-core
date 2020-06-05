import * as React from 'react';

export interface EventHandlerProps {
  onClick?: (e: React.MouseEvent) => void;
  color: 'primary' | 'secondary';
}

export const Button: React.FC<EventHandlerProps> = (props) => {
  const className =
    props.color === 'primary'
      ? 'bg-blue-500 hover:bg-blue-700 '
      : 'bg-red-500 hover:bg-red-700';
  return (
    <button
      type="button"
      {...props}
      className={`${className} text-white font-bold py-2 px-4 rounded`}
    >
      {props.children}
    </button>
  );
};
