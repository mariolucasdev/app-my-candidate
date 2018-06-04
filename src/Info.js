import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default () => (
  <View style={styles.content}>
    {/* <Image source={require("./imgs/logo.png")} /> */}
    <Text style={styles.text}>twitter: @he_nasc</Text>
    <Text style={styles.text}>https://github.com/henriquenasc</Text>
    <Text style={{ color: "#fff", fontWeight: "bold" }}>
      -------------------------------------------------------
    </Text>
    <Text style={styles.text}>versão: 1.0.0</Text>
  </View>
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9"
  },

  text: {
    margin: 5,
    padding: 10,
    backgroundColor: "#fff",
    color: "#2980b9",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10
  }
});
