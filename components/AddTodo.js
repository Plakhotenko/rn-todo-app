import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = (props) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Todo title cannot be empty");
    }
  };
  return (
    <View style={styles.addtodo}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="new todo"
      />
      <Button title="add" color="#731963" onPress={pressHandler} />
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
    paddingVertical: 3,
    paddingHorizontal: 10,
    width: "80%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    fontSize: 20,
    marginRight: 10,
  },
});
