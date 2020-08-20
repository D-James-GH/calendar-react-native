import React, { FunctionComponent } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

type WeekCellProps = {
  day: number;
  onDayPress: Function;
};

const style = StyleSheet.create({
  dayContainer: {
    flex: 1,
    borderStyle: "solid",
    borderBottomColor: "#3e484d",
    borderBottomWidth: 0.5,
    padding: 3,
  },
  currentMonth: {
    backgroundColor: "rgba(56, 144, 129, 0.2)",
  },
});

const WeekCell: FunctionComponent<WeekCellProps> = ({ day, onDayPress }) => {
  const handleOnPress = () => {
    onDayPress(day);
  };
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={[style.dayContainer, day !== 0 && style.currentMonth]}
    >
      <Text>{day}</Text>
    </TouchableOpacity>
  );
};

export default WeekCell;
