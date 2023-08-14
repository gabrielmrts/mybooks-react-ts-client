import * as React from 'react';

interface IButtonProps {
    children: React.ReactNode;
    className: string;
    hoverVariation: 'dark' | 'light' | null;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children, className, hoverVariation, onClick }) => {
  var defaultClassName = 'rounded ';

  if (hoverVariation == "dark") {
    defaultClassName += `hover:bg-black hover:border hover:border-white hover:text-white duration-500 `
  } else { 
    defaultClassName += `hover:bg-white hover:border hover:border-black hover:text-black duration-500 `
  }

  defaultClassName += className

  return (
    <button className={defaultClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
