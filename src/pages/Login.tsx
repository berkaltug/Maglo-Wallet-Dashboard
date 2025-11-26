import React from "react";
import heroImage from "../assets/Image.png";
import FormInput from "../components/FormInput";
import Text from "../components/Text";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleButton";
import AccountQuestionButton from "../components/AccountQuestionButton";
import MagloLogo from "../components/MagloLogo";
import { loginFormSchema } from "../helper/yupSchemas";
import { useMutation } from "@tanstack/react-query";
import {
  type LoginError,
  type LoginFormInput,
  type LoginSuccess,
} from "../services/userTypes";
import { toast } from "react-toastify";
import { useForm } from "../hooks/useForm";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { login } from "../services/userService";
import { useAppDispatch } from "../redux/store";
import { loggedIn } from "../redux/userSlice";

function Login() {
  const { formValues, validationErrors, handleChange } = useForm(
    { email: undefined, password: undefined },
    loginFormSchema
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const mutation = useMutation<
    LoginSuccess,
    AxiosError<LoginError>,
    LoginFormInput
  >({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (response) => {
      console.log("login response in mutation",response)
      dispatch(loggedIn(response.data))
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "An error occured");
    },
  });

  const submitForm = () => {
    mutation.mutate({ ...(formValues as LoginFormInput) });
  };

  const goSignUp=()=>navigate('/register')

  return (
    <div className="flex w-screen min-h-screen flex-col md:flex-row">
      <div className="flex-1 flex justify-center items-stretch">
        <div className="relative flex flex-col justify-center">
          <div className="absolute top-10 ">
            <MagloLogo />
          </div>
          <div>
            <Text className="text-3xl">Sign In</Text>
            <Text className="mb-9 text-rhythm">
              Welcome back! Please enter your details
            </Text>
            <Text className="mt-2.5 mb-2.5 text-sm font-medium">Email</Text>
            <FormInput
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              disabled={mutation.isPending}
              className={validationErrors.email && "border-red-300"}
            />
            {validationErrors.email && (
              <Text className="text-red-300">{validationErrors.email}</Text>
            )}
            <Text className="mt-2.5 mb-2.5 text-sm font-medium">Password</Text>
            <FormInput
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              disabled={mutation.isPending}
              className={validationErrors.password && "border-red-300"}
            />
            {validationErrors.password && (
              <Text className="text-red-300">{validationErrors.password}</Text>
            )}
            <Button onPress={submitForm} className="mt-6" loading={mutation.isPending}>
              Sign in
            </Button>
            <GoogleButton onPress={() => {}} className="mt-4" />
            <AccountQuestionButton onPress={goSignUp} />
          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <img src={heroImage} className="h-screen" alt="" />
      </div>
    </div>
  );
}

export default Login;
