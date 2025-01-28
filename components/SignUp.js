import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { IMAGE } from "../constants/IMAGE";
import { CONSTANT } from "../constants/CONSTANTS";
import AuthForm from "./AuthForm";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!email.includes("@")) {
      alert(CONSTANT.VALID_EMAIL_ALERT);
      return;
    }

    if (password !== confirmPassword) {
      alert(CONSTANT.PASSWORDS_DO_NOT_MATCH);
      return;
    }

    if (password.length < 6) {
      alert(CONSTANT.VALID_PASSWORD_ALERT);
      return;
    }

    alert(CONSTANT.SIGNUP_SUCCESSFUL);
    navigation.navigate("Login");
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{ backgroundColor: "#fff" }}
      >
        <Image
          source={IMAGE.BACK_ARROW}
          style={{ marginLeft: 15, marginTop: 20, width: 25, height: 25 }}
        />
      </TouchableOpacity>
      <AuthForm
        isSignup={true}
        onSubmit={handleSignup}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        navigation={navigation}
      />
    </>
  );
};

export default SignUp;
