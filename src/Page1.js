import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Page1 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default Page1;
