import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { IMAGE } from "../constants/IMAGE";
import LoginStyles from "../styles/styles";
import { CONSTANT } from "../constants/CONSTANTS";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [masked, setMasked] = useState(true);
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
      <View style={LoginStyles.container}>
        <Text style={LoginStyles.welcomeHeaderText}>
          {CONSTANT.WELCOME_HEADER}
        </Text>
        <View style={LoginStyles.textInputContainer}>
          <Image source={IMAGE.EMAIL} style={LoginStyles.textInputImage} />
          <TextInput
            style={LoginStyles.input}
            placeholder="Email"
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
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </TouchableOpacity>
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
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignup}
          style={LoginStyles.loginButton}
        >
          <Text style={LoginStyles.title}>{CONSTANT.SIGN_UP}</Text>
        </TouchableOpacity>
        <Text style={LoginStyles.orLoginWithText}>
          {CONSTANT.OR_SIGN_UP_WITH}
        </Text>
        <Image source={IMAGE.GOOGLE} style={LoginStyles.googleImage} />
        <Text
          style={LoginStyles.link}
          onPress={() => navigation.navigate("Login")}
        >
          {CONSTANT.ALREADY_HAVE_AN_ACCOUNT}
        </Text>
      </View>
    </>
  );
};

export default SignUp;
