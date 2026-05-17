import React from 'react';
import type { CustomInputProps } from '../../../types/Types';
import './Input.scss';

export const Input: React.FC<CustomInputProps> = ({ className, ...rest }) => {
  return (
    <input 
      className={`ui-input ${className || ''}`} 
      {...rest} 
    />
  );
};