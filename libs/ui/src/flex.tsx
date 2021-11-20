import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'column' | 'row';
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
}

const Box = styled.div(
  (props: FlexProps) => `
  display: flex;
  ${props.direction ? `flex-direction: ${props.direction};` : ''}
  ${props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${props.alignItems ? `justify-items: ${props.alignItems};` : ''}
`
);

export const Flex: React.FC<FlexProps> = (props) => {
  return <Box {...props} />;
};
