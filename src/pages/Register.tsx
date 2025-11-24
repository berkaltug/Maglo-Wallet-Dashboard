import React from "react";
import heroImage from "../assets/Image.png";
import magloLogo from "../assets/maglo-logo.svg";
import FormInput from "../components/FormInput";
import Text from "../components/Text";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleButton";
import AccountQuestionButton from "../components/AccountQuestionButton";

function Register() {
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
            <Text
              className="text-sm font-medium mt-2.5 mb-2.5"
            >
              Full Name
            </Text>
            <FormInput type="text" />
            <Text
              className="text-sm font-medium mt-2.5 mb-2.5"
            >
              Email
            </Text>
            <FormInput type="text" />
            <Text
              className="text-sm font-medium mt-2.5 mb-2.5"
            >
              Password
            </Text>
            <FormInput type="password" />
            <Button onPress={()=>{}} className="mt-6">Create Account</Button>
            <GoogleButton onPress={()=>{}} className="mt-4"/>
            <AccountQuestionButton signin={false} onPress={()=>{}}/>
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
