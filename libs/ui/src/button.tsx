import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css, cx } from '@emotion/css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost';
  color?: 'primary' | 'danger';
}

const StyledButton = styled.button(
  (props: ButtonProps) => `
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #ffffff;
  cursor: ${props.disabled ? 'default' : 'pointer'};

  ${
    props.disabled
      ? `
    background-color: #dedede;
    color: #999;
    border: none;
  `
      : ''
  }

  ${
    props.variant === 'ghost' && !props.disabled
      ? `
  background-color: transparent;
  border: none;  
  `
      : ''
  }

  ${
    props.variant === 'solid' && !props.disabled
      ? `
  background-color: ${props.color === 'primary' ? '#04ce8b' : '#ff4455'};
  border-width: 2px;
  border-style: solid;
  border-color: ${props.color === 'primary' ? '#04cf8b' : '#ff4f55'};
};
  `
      : ''
  }
`
);

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  color = 'primary',
  ...others
}) => {
  return <StyledButton variant={variant} color={color} {...others} />;
};
