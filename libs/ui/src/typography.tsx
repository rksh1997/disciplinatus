import React, { HTMLAttributes } from 'react';
import { css } from '@emotion/css';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  decoration?: 'overline' | 'line-through' | 'underline';
  align?: 'left' | 'center' | 'right';
  muted?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  as: As = 'p',
  muted,
  decoration,
  align,
  ...others
}) => {
  return (
    <As
      className={css`
        color: ${muted ? '#dedede' : '#333'};
        ${decoration ? `text-decoration: ${decoration}` : ''}
        ${align ? `text-align: ${align}` : ''}
      `}
      {...others}
    />
  );
};
