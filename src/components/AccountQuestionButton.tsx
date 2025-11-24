import React from "react";
import line from "../assets/line.svg";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  signin?: boolean;
  onPress: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  signin = true,
  onPress,
}) => {
  return (
    <button
      className={twMerge("block w-101 rounded-[10px] pb-3.5 pt-3.5 pr-5 pl-5 flex justify-center items-center",className)}
      onClick={onPress}
    >
      {signin ? (
        <div className="relative">
          <span className="text-rhythm">Don't have an account?</span> Sign up
          <img src={line} className="w-11 h-2  object-cover absolute right-1 -bottom-2"></img>
        </div>
      ) : (
       <div className="relative">
         <span className="text-rhythm">Already have an account?</span> Sign in
          <img src={line} className="w-11 h-2  object-cover absolute right-1 -bottom-2"></img>
        </div>
      )}
    </button>
  );
};

export default Button;
