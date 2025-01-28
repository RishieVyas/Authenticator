import React, { useContext, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import AuthContext from "../utils/AuthContext";
import { CONSTANT } from "../constants/CONSTANTS";
import { IMAGE } from "../constants/IMAGE";
import LoginStyles from "../styles/styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [masked, setMasked] = useState(true);
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    if (!email.includes("@")) {
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
    <View style={LoginStyles.container}>
      <View style={LoginStyles.headerContainer}>
        <Image source={IMAGE.BLOCKHOUSE_ICON} style={LoginStyles.headerImage} />
        <Text style={LoginStyles.headerText}>{CONSTANT.BLOCKHOUSE}</Text>
      </View>
      <View style={LoginStyles.textInputContainer}>
        <Image source={IMAGE.EMAIL} style={LoginStyles.textInputImage} />
        <TextInput
          style={LoginStyles.input}
          placeholder={CONSTANT.EMAIL}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity
        onPress={() => setMasked(!masked)}
        style={LoginStyles.textInputContainer}
      >
        <Image
          source={masked ? IMAGE.MASKED_PASSWORD : IMAGE.PASSWORD}
          style={LoginStyles.textInputImage}
        />
        <TextInput
          style={LoginStyles.input}
          placeholder={CONSTANT.PASSWORD}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={masked ? true : false}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={LoginStyles.loginButton}>
        <Text style={LoginStyles.title}>{CONSTANT.LOGIN}</Text>
      </TouchableOpacity>

      <Text style={LoginStyles.orLoginWithText}>{CONSTANT.OR_LOGIN_WITH}</Text>
      <Image source={IMAGE.GOOGLE} style={LoginStyles.googleImage} />
      <Text
        style={LoginStyles.link}
        onPress={() => navigation.navigate("SignUp")}
      >
        {CONSTANT.SIGN_UP_LINK}
      </Text>
    </View>
  );
};

export default Login;
