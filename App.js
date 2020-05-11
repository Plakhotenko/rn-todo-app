import React, { useState } from "react";
import { StyleSheet, ScrollView, View, FlatList } from "react-native";
import { Navbar } from "./components/Navbar";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Navbar title="TODO App"></Navbar>
      <View style={styles.mainview}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={(item) => item.id}
          style={styles.todos}
          data={todos}
          renderItem={({ item }) => <Todo todo={item}></Todo>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFDFD",
  },
  mainview: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  todos: {
    paddingVertical: 20,
  },
});
