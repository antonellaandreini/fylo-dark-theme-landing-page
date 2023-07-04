import React from 'react';
import './styles.css';

export interface ButtonProps {
  id: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  text: string;
  width: string;
  height: string;
  fontSize: string;
  style?: React.CSSProperties;
  className?: string;
}

const Button = ({ id, type, text, width, height, fontSize, style, className }: ButtonProps) => (
  <button
    id={id}
    type={type}
    className={className}
    style={{ ...style, width: width, height: height, fontSize: fontSize }}
  >
    {text}
  </button>
);
export default Button;
