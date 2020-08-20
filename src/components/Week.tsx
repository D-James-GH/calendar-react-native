import React, { FunctionComponent } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import moment from "moment";

import WeekCell from "./WeekCell";

type WeekProps = {
  week: number;
  dateObject: any;
  onDayPress: any;
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
const Week: FunctionComponent<WeekProps> = ({
  week,
  dateObject,
  onDayPress,
}) => {
  let firstDay = Number(moment(dateObject).startOf("month").format("d"));
  let lastDate = Number(moment(dateObject).endOf("month").format("D"));

  let weekStart = week * 7 - firstDay + 2;

  let days: Array<number> = [];

  for (let d = 0; d < 7; d++) {
    if (d < firstDay - 1 && week === 0) {
      days.push(0);
    } else if (d + weekStart <= lastDate) {
      days.push(d + weekStart);
    } else {
      days.push(0);
    }
  }

  return (
    <View style={style.container}>
      {days.map((day, i) => (
        <WeekCell key={i} onDayPress={onDayPress} day={day} />
      ))}
    </View>
  );
};

export default Week;
