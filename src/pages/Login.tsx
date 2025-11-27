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
      <div className="flex-1 grid  grid-cols-[1fr_auto_1fr] grid-rows-[1fr_4fr_1fr]">
          <div className="row-1 col-2  pt-4 md:pt-10 lg:pt-17.5">
            <MagloLogo />
          </div>
          <div className="row-2 col-2 self-center justify-self-center">
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
      <div className="xl:block hidden">
        <img src={heroImage} className="min-h-screen" alt="" />
      </div>
    </div>
  );
}

export default Login;
