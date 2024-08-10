import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large'; // Custom prop for button sizes
  isLoading?: boolean; // Custom prop for loading state
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  let className = 'rounded text-white ';

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
export default Button;
