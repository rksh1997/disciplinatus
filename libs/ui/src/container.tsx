import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Box = styled.div`
  max-width: 1080px;
  margin: auto;
`;

export const Container: React.FC<ContainerProps> = (props) => {
  return <Box {...props} />;
};
