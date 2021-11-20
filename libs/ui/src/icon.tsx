import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export interface IconProps {
  className?: string;
  icon: FontAwesomeIconProps['icon'];
}

export const Icon: React.FC<IconProps> = (props) => {
  return <FontAwesomeIcon {...props} />;
};
