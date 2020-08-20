import React, { FunctionComponent } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { View, Text } from "react-native";
import { RouteNavProps } from "../RouteParamList";
import { RouteProp } from "@react-navigation/native";

const Day = ({ route, navigation }: RouteNavProps<"Day">) => {
  const { day } = route.params;

  return (
    <View>
      <Text>Day test View {day}</Text>
    </View>
  );
};
export default Day;
