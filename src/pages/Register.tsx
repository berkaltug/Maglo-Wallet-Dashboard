import React from "react";
import heroImage from "../assets/Image.png";
import magloLogo from "../assets/maglo-logo.svg";
import FormInput from "../components/FormInput";
import Text from "../components/Text";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleButton";
import AccountQuestionButton from "../components/AccountQuestionButton";
import { registerFormSchema } from "../helper/yupSchemas";
import { useForm } from "../hooks/useForm";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import {
  type RegisterError,
  type RegisterFormInput,
  type RegisterSuccess,
} from "../services/userTypes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { register } from "../services/userService";

function Register() {
  const { formValues, validationErrors, handleChange } = useForm(
    {} as RegisterFormInput,
    registerFormSchema
  );
  const navigate = useNavigate();
  const mutation = useMutation<
    RegisterSuccess,
    AxiosError<RegisterError>,
    RegisterFormInput
  >({
    mutationFn: register,
    mutationKey: ["register"],
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        error?.response?.data?.details?.[0]?.message ||
          error?.response?.data?.message
      );
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ ...formValues });
  };

  const goSignIn=()=>navigate('/')
  return (
    <div className="flex w-screen min-h-screen flex-col md:flex-row">
      <div className="flex-1 flex justify-center items-stretch">
        <div className="relative flex flex-col justify-center">
          <div className="absolute top-10 flex items-center">
            <img src={magloLogo} className="w-7.5 h-7.5" alt="maglo logo" />
            <span className="font-(Gordita) font-bold text-lg m-2">Maglo.</span>
          </div>
          <div>
            <Text className="text-3xl">Create new account</Text>
            <Text className="mb-9 text-rhythm">
              Welcome back! Please enter your details
            </Text>
            <Text className="text-sm font-medium mt-2.5 mb-2.5">Full Name</Text>
            <FormInput
              name="fullName"
              onChange={handleChange}
              type="text"
              value={formValues.fullName}
              disabled={mutation.isPending}
              className={validationErrors.fullName && "border-red-300"}
            />
            {validationErrors.fullName && (
              <Text className="text-red-300">{validationErrors.fullName}</Text>
            )}
            <Text className="text-sm font-medium mt-2.5 mb-2.5">Email</Text>
            <FormInput
              name="email"
              type="text"
              onChange={handleChange}
              value={formValues.email}
              disabled={mutation.isPending}
              className={validationErrors.email && "border-red-300"}
            />
            {validationErrors.email && (
              <Text className="text-red-300">{validationErrors.email}</Text>
            )}
            <Text className="text-sm font-medium mt-2.5 mb-2.5">Password</Text>
            <FormInput
              name="password"
              type="password"
              onChange={handleChange}
              value={formValues.password}
              disabled={mutation.isPending}
              className={validationErrors.password && "border-red-300"}
            />
            {validationErrors.password && (
              <Text className="text-red-300">{validationErrors.password}</Text>
            )}
            <Button onPress={handleSubmit} className="mt-6" loading={mutation.isPending}>
              Create Account
            </Button>
            <GoogleButton onPress={() => {}} className="mt-4" />
            <AccountQuestionButton signin={false} onPress={goSignIn} />
          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <img src={heroImage} className="h-screen" alt="" />
      </div>
    </div>
  );
}

export default Register;
