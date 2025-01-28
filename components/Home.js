import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IMAGE } from "../constants/IMAGE";
import { CONSTANT } from "../constants/CONSTANTS";
import LoginStyles from "../styles/styles";

const Home = ({ navigation }) => {
  return (
    <View style={LoginStyles.homeContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={LoginStyles.logOutText}>{CONSTANT.LOGOUT}</Text>
      </TouchableOpacity>
      <Image style={{ marginBottom: 20 }} source={IMAGE.WELCOME_LOGO} />
      <Text style={{ fontSize: 20 }}>{CONSTANT.WELCOME_TEXT}</Text>
    </View>
  );
};

export default Home;
