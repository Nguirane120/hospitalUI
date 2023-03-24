import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/components/Home";
import BotomTabs from "../src/tabs";
import DetailMessage from "../src/components/DetailMessage";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={BotomTabs} />
        <Stack.Screen name="MessageDetail" component={DetailMessage}
        options={{ headerShown: true }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
