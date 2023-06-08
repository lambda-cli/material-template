import React from 'react';

let a;

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <div>{props.children ?? 'Button'}</div>;
};

export default Button;
