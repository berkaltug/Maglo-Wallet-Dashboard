import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps {
    className?:string,
    children:string | number,

}
const Text:React.FC<TextProps> = ({className,children}) => {
  return (
    <div className={twMerge(`font-(Kumbh_Sans) text-dark-gunmetal text-base font-normal text-left`,className)}>{children}</div>
  )
}

export default Text