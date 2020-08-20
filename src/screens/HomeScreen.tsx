import React, { useState, FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
import moment from "moment";

import Week from "../components/Week";
import { RouteNavProps } from "../RouteParamList";

export default function HomeScreen({ navigation }: RouteNavProps<"Home">) {
  const [dateObject, setDateObject] = useState(moment());
  const weekdaysShort = moment.weekdaysShort();
  const weekIndex = [0, 1, 2, 3, 4, 5];

  const onDayPress = (day: number) => {
    navigation.navigate("Day", { day: day });
  };

  return (
    <View style={style.container}>
      <Text>Calendar</Text>
      <View style={style.tableHead}>
        {weekdaysShort.map((day: string) => (
          <Text key={day} style={style.tableHeadCell}>
            {day}
          </Text>
        ))}
      </View>
      <View style={style.calendarContainer}>
        {weekIndex.map((week, i) => (
          <Week
            onDayPress={onDayPress}
            key={week}
            week={i}
            dateObject={dateObject}
          />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  tableHead: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#389081",
  },
  tableHeadCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  calendarContainer: {
    flex: 1,
  },
});
