import React from 'react';

import './input.css';

export interface InputProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the Input be? */
  size?: 'small' | 'medium' | 'large';
  /** Input contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Input = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: InputProps) => {
  const mode = primary ? 'storybook-Input--primary' : 'storybook-Input--secondary';
  return (
    <input
      type="text"
      className={['storybook-Input', `storybook-Input--${size}`, mode].join(' ')}
      {...props}
    />
  );
};
