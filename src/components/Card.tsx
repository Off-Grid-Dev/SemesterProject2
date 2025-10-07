import type { FC } from "react";
import Button from "./Button";

type CardProps = {
  id: string;
  avatar: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
};

const Card: FC<CardProps> = ({
  id,
  avatar,
  title,
  description,
  buttonText,
  buttonVariant,
}) => {
  return (
    <div className="card-container bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full object-cover border-2 border-gray-200">
          <img src={avatar} alt="image of dog" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {title}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button buttonVariant={buttonVariant} id={id}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;
