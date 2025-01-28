import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { IMAGE } from "../constants/IMAGE";
import { CONSTANT } from "../constants/CONSTANTS";
import LoginStyles from "../styles/styles";
import AuthContext from "../utils/AuthContext";

const Home = ({ navigation }) => {
  const { state, dispatch } = useContext(AuthContext);

  const onLogOutPressed = () => {
    dispatch({ type: "LOGIN", payload: null });
    navigation.navigate("Login");
  };

  return (
    <View style={LoginStyles.homeContainer}>
      <Text style={{ fontSize: 20 }}>{CONSTANT.WELCOME_TEXT}</Text>

      {/* Email displayed through context state management */}
      {state.isAuthenticated ? (
        <Text style={{ fontSize: 20 }}>Hello {state.user.email}</Text>
      ) : null}

      <Image style={{ marginBottom: 20 }} source={IMAGE.WELCOME_LOGO} />
      <TouchableOpacity onPress={onLogOutPressed}>
        <Text style={LoginStyles.logOutText}>{CONSTANT.LOGOUT}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
