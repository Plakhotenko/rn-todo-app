import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./components/Navbar";
import { AddTodo } from "./components/AddTodo";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="TODO App"></Navbar>
      <View style={styles.mainview}>
        <AddTodo />
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
});
