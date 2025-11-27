import heroImage from "../assets/image.png";
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
import MagloLogo from "../components/MagloLogo";

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
      <div className="flex-1 grid  grid-cols-[1fr_auto_1fr] grid-rows-[1fr_4fr_1fr]">
          <div className="row-1 col-2  pt-4 md:pt-10 lg:pt-17.5">
            <MagloLogo />
          </div>
          <div className="row-2 col-2 self-center justify-self-center">
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
      <div className="xl:block hidden">
        <img src={heroImage} className="min-h-screen" alt="" />
      </div>
    </div>
  );
}

export default Register;
