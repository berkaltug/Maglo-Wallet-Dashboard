import { type ChangeEvent, useState } from "react";
import * as yup from 'yup';

export function useForm<T extends object>(formShape:T,yupSchema:yup.Schema){
    const [formValues, setFormValues] = useState(formShape);
    const [validationErrors, setValidationErrors] = useState(formShape);
    type formType=typeof formShape

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nextFormValues = { //required for checking synchronously with yup
        ...formValues, 
        [name]: value 
    };

    setFormValues((previous:formType) => ({ ...previous, [name]: value }));
    yupSchema
      .validateAt(name, nextFormValues)
      .then(() =>
        setValidationErrors((prevErrors:formType) => ({ ...prevErrors, [name]: null }))
      )
      .catch((err: yup.ValidationError) =>
        setValidationErrors((prevErrors:formType) => ({
          ...prevErrors,
          [name]: err.message,
        }))
      );
  };

  return {formValues,validationErrors,handleChange}
}