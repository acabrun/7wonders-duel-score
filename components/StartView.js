import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default class StartView extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <View
          style={{
            flex: 1.1,
            justifyContent: "center",
            backgroundColor: "white"
          }}
        >
          <TouchableOpacity style={styles.button} backgroundColor="green" onPress={() => null}>
            <Text style={styles.textButton} > Continue </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} backgroundColor="blue" onPress={() => null}>
            <Text style={styles.textButton}> New game </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    borderRadius: 10
  }
});
