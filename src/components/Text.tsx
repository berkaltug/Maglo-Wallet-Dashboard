import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps {
    color?:string,
    size?:string,
    weight?:string,
    textAlign?:string,
    className?:string,
    children:string | number,

}
const Text:React.FC<TextProps> = ({color="text-dark-gunmetal",size="text-base",weight='font-normal',textAlign='text-left',className,children}) => {
  return (
    <div className={twMerge(`font-(Kumbh_Sans) ${color} ${size} ${weight} ${textAlign}`,className)}>{children}</div>
  )
}

export default Text