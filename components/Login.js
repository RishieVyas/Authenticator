import React, { useContext, useState } from "react";
import AuthContext from "../utils/AuthContext";
import { CONSTANT } from "../constants/CONSTANTS";
import AuthForm from "./AuthForm";
import { validateEmail } from "../utils/commonFunctions";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    if (validateEmail(email) == false) {
      alert(CONSTANT.VALID_EMAIL_ALERT);
      return;
    }

    if (password.length < 6) {
      alert(CONSTANT.VALID_PASSWORD_ALERT);
      return;
    }

    navigation.navigate("Home");
    dispatch({ type: "LOGIN", payload: { email } });
  };

  return (
    <AuthForm
      isSignup={false}
      onSubmit={handleLogin}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      navigation={navigation}
    />
  );
};

export default Login;
