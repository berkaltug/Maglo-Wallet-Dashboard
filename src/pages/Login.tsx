import React from "react";
import heroImage from "../assets/Image.png";
import magloLogo from "../assets/maglo-logo.svg";
import FormInput from "../components/FormInput";
import Text from "../components/Text";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleButton";
import AccountQuestionButton from "../components/AccountQuestionButton";
import MagloLogo from "../components/MagloLogo";

function Login() {
  return (
    <div className="flex w-screen min-h-screen flex-col md:flex-row">
      <div className="flex-1 flex justify-center items-stretch">
        <div className="relative flex flex-col justify-center">
          <div className="absolute top-10 ">
            <MagloLogo/>
          </div>
          <div>
            <Text size="text-3xl">Sign In</Text>
            <Text color="text-rhythm" className="mb-9">
              Welcome back! Please enter your details
            </Text>
            <Text
              size="text-sm"
              weight="font-medium"
              className="mt-2.5 mb-2.5"
            >
              Email
            </Text>className
            <FormInput type="text" />
            <Text
              size="text-sm"
              weight="font-medium"
              className="mt-2.5 mb-2.5"
            >
              Password
            </Text>
            <FormInput type="password" />
            <Button onPress={()=>{}} className="mt-6">Sign in</Button>
            <GoogleButton onPress={()=>{}} className="mt-4"/>
            <AccountQuestionButton onPress={()=>{}}/>
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
