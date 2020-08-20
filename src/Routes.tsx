import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteParamList } from "./RouteParamList";

import { DayProvider } from "./context/DayContext";

import HomeScreen from "./screens/HomeScreen";
import Day from "./screens/Day";

interface RoutesProps {}

const Stack = createStackNavigator<RouteParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Day" component={Day} initialParams={{ day: 0 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
