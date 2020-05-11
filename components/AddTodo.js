import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = (props) => {
  return (
    <View style={styles.addtodo}>
      <TextInput keyboardType="number-pad" style={styles.input} />
      <Button title="add" color="#731963" />
    </View>
  );
};

const styles = StyleSheet.create({
  addtodo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 3,
    width: "80%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    fontSize: 20,
    marginRight: 10,
  },
});
