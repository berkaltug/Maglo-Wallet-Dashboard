import React, { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    onPress:()=>void;
    className?:string;
    children:ReactNode;
}

const Button:React.FC<ButtonProps> = ({className,onPress,children}) => {
  return (
    <button className={twMerge(`block bg-max-green-yellow max-w-101 w-full rounded-[10px] pb-3.5 pt-3.5 pr-5 pl-5 text-center`,className)} onClick={onPress}>{children}</button>
  )
}

export default Button