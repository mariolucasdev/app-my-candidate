import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Page2 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Favorites Page</Text>
    <Button title="add" onPress={() => alert("add favorites")} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e74c3c",
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

export default Page2;
