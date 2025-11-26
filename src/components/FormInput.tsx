import React, { type ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface FormInputProps {
  type: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string | number | undefined;
  disabled: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  className,
  onChange,
  name,
  value,
  disabled,
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      name={name}
      value={value}
      disabled={disabled}
      className={twMerge(
        "border rounded-[10px] pl-4 pr-6 pt-4 pb-4 max-w-101 w-full border-slate-200 focus:outline-0",
        className
      )}
    />
  );
};

export default FormInput;
