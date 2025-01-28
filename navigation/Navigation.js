import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import { IMAGE } from "../constants/IMAGE";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigation;
