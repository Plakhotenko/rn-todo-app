import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Todo = (props) => {
  return (
    <View style={styles.todo}>
      <Text>{props.todo.title}</Text>
    </View>
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
