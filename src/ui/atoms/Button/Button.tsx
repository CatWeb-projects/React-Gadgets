import React from 'react';

import './Button.scss';

interface Props {
  children: React.ReactNode;
  value?: string | number;
  onClick?: () => void;
  className?: string;
  type?: 'primary' | 'invert' | 'transparent' | 'icon' | 'black';
  disabled?: boolean;
  generalType?: 'button' | 'submit';
  size?: 'small' | 'medium' | 'large' | 'full-width';
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className = '',
  type = 'primary',
  generalType = 'button',
  disabled,
  size = 'medium',
  ...props
}) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined) {
      return onClick();
    }
  };

  return (
    <button
      className={`button button-type-${type} button-type-${size} ${
        disabled ? 'disabled' : ''
      } ${className}`}
      onClick={onClickHandler}
      {...props}
      type={generalType}
    >
      {children}
    </button>
  );
};
