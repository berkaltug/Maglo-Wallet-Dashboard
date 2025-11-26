// validationSchema.js
import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup.string()
    .email('Enter a valid email address') 
    .required('Email is required'),      
  password: yup.string()
    .min(6, 'Password should be min 6 character')
    .required('Password is required'),
});

export const registerFormSchema = yup.object().shape({
  fullName: yup.string()
    .required("Full name is required"),
  email: yup.string()
    .email('Enter a valid email address') 
    .required('Email is required'),      
  password: yup.string()
    .min(6, 'Password should be min 6 character')
    .required('Password is required'),
})