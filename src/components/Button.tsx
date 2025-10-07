import type { FC, ReactNode } from "react";
import { Link } from "react-router";

type ButtonProps = {
  children: ReactNode;
  buttonVariant: string;
  id: string;
};

const buttonClasses = (variant = "primary"): string => {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  switch (variant) {
    case "secondary":
      return `${baseClasses} bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500`;
    case "outline":
      return `${baseClasses} border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500`;
    default:
      return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
  }
};

const Button: FC<ButtonProps> = ({ children, buttonVariant, id }) => {
  return (
    <Link className={buttonClasses(buttonVariant)} to={`/dogs:${id}`}>
      {children}
    </Link>
  );
};

export default Button;
