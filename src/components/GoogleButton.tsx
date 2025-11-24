import React from 'react'
import GoogleSVG from '../assets/Google.svg'
import { twMerge } from 'tailwind-merge';
interface ButtonProps {
    signin?:boolean;
    onPress:()=>void;
    className?:string;
}

const Button:React.FC<ButtonProps> = ({className,signin=true,onPress}) => {
  return (
    <button className={twMerge(`block w-101 rounded-[10px] pb-3.5 pt-3.5 pr-5 pl-5 border rounded-[10px] border-slate-200 flex justify-center items-center`,className)} onClick={onPress}>
        <img src={GoogleSVG} className='w-6 h-6' alt="" />
        {signin ? (<span>Sign in with google</span>):((<span>Sign up with google</span>))}
    </button>
  )
}

export default Button