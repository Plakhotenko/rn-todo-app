import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = (props) => {
  const longPressHandler = () => {
    props.onRemove(props.todo.id);
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onLongPress={longPressHandler}>
      <View style={styles.todo}>
        <Text>{props.todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginBottom: 5,
  },
});
