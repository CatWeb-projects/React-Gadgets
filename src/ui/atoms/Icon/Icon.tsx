import * as React from 'react';
import SVG from 'react-inlinesvg';

interface Props {
  className?: string;
  type?: string;
  size?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
}

export const Icon: React.FC<Props> = ({
  className = '',
  type,
  size = 'small',
  onClick,
  disabled,
  active
}) => {
  const defaultProps = {
    className: `zh-icon icon-size-${size} zh-icon-${type}  ${
      active ? ' active' : ''
    }${disabled ? ' disabled' : ''} ${className}`,
    width: '1em',
    height: '1em',
    onClick
  };
  switch (type) {
    default:
      return <SVG src={`/svg/${type}.svg`} {...defaultProps} />;
  }
};
