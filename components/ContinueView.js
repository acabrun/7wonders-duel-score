import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default class ContinueView extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <View
          style={{
            flex: 1.1,
            backgroundColor: "white"
          }}
        >
          <View alignItems="center">
            <Text style={styles.baseText}>Choose game !</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            backgroundColor="green"
            onPress={() => null}
          >
            <Text style={styles.textButton}> Antho Vs Aélis </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            backgroundColor="blue"
            onPress={() => null}
          >
            <Text style={styles.textButton}> Antho Vs Hugo </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            backgroundColor="blue"
            onPress={() => null}
          >
            <Text style={styles.textButton}> Aélis Vs Jérem </Text>
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
  baseText: {
    fontSize: 18,
    marginBottom: 50,
    marginTop: 25
  },
  button: {
    alignItems: "center",
    backgroundColor: "grey",
    padding: 10,
    margin: 10,
    borderRadius: 10
  }
});
