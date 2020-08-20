import React, { FunctionComponent, useState, useContext } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { View, Text, TextInput, FlatList, Button } from "react-native";
import { RouteNavProps } from "../RouteParamList";
import { RouteProp } from "@react-navigation/native";
import DayContext from "../context/DayContext";

const Day = ({ route, navigation }: RouteNavProps<"Day">) => {
  const { day } = route.params;
  const [inputText, onChangeInputText] = React.useState("Useless Placeholder");
  const { data, addActivity } = useContext(DayContext);
  return (
    <View>
      <Text>Day test View {day}</Text>
      <Button title="Add Activity" onPress={addActivity} />

      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeInputText(text)}
        value={inputText}
      />
    </View>
  );
};
export default Day;
