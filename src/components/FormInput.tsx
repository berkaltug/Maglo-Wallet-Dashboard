import React from 'react'
import { twMerge } from 'tailwind-merge'

interface FormInputProps {
    type:string
    className?:string
}

const FormInput:React.FC<FormInputProps>=({type,className}) => {
  return (
    <input type={type} className={twMerge('border rounded-[10px] pl-4 pr-6 pt-4 pb-4 max-w-101 w-full border-slate-200',className)}/>
  )
}

export default FormInput