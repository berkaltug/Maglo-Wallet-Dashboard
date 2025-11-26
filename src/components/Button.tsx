import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Loading from "../assets/loading.svg";
interface ButtonProps {
  onPress: () => void;
  className?: string;
  children: ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onPress,
  children,
  loading,
}) => {
  return (
    <button
      className={twMerge(
        `block bg-max-green-yellow max-w-101 w-full h-12 rounded-[10px] text-center flex justify-center items-center disabled:bg-slate-400`,
        className
      )}
      onClick={onPress}
      disabled={loading}
    >
      {loading ? (
        <img src={Loading} className="animate-spin h-6" />
      ) : (
         children 
      )}
    </button>
  );
};

export default Button;
