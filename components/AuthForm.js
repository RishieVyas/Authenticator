import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CONSTANT } from "../constants/CONSTANTS";
import { IMAGE } from "../constants/IMAGE";
import LoginStyles from "../styles/styles";
import { useState } from "react";

const AuthForm = ({
  isSignup = false,
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  navigation,
}) => {
  const [masked, setMasked] = useState(true);

  return (
    <View style={LoginStyles.container}>
      {isSignup ? (
        <Text style={LoginStyles.welcomeHeaderText}>
          {CONSTANT.WELCOME_HEADER}
        </Text>
      ) : (
        <View style={LoginStyles.headerContainer}>
          <Image
            source={IMAGE.BLOCKHOUSE_ICON}
            style={LoginStyles.headerImage}
          />
          <Text style={LoginStyles.headerText}>{CONSTANT.BLOCKHOUSE}</Text>
        </View>
      )}
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
      {isSignup ? (
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
      ) : null}
      <TouchableOpacity onPress={onSubmit} style={LoginStyles.loginButton}>
        <Text style={LoginStyles.title}>
          {isSignup ? CONSTANT.SIGN_UP : CONSTANT.LOGIN}
        </Text>
      </TouchableOpacity>
      <Text style={LoginStyles.orLoginWithText}>
        {isSignup ? CONSTANT.OR_SIGN_UP_WITH : CONSTANT.OR_LOGIN_WITH}
      </Text>
      <Image source={IMAGE.GOOGLE} style={LoginStyles.googleImage} />
      <Text
        style={LoginStyles.link}
        onPress={() =>
          isSignup
            ? navigation.navigate("Login")
            : navigation.navigate("SignUp")
        }
      >
        {isSignup ? CONSTANT.ALREADY_HAVE_AN_ACCOUNT : CONSTANT.SIGN_UP_LINK}
      </Text>
    </View>
  );
};

export default AuthForm;
