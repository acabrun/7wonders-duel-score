import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <View
          style={{ flex: 0.5, justifyContent: "center", backgroundColor: "white" }}
        ></View>
        <View
          style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}
        >
          <Text>7 Wonder Score</Text>
        </View>
        <View
          style={{ flex: 7, justifyContent: "center", backgroundColor: "blue" }}
        ></View>
        <View
          style={{
            flex: 1.1,
            justifyContent: "space-around",
            backgroundColor: "orange",
          }}
        >
          <Button title="Continue" color="green" onPress={() => null} />
          <Button title="New game" onPress={() => null} />
        </View>
      </View>
    );
  }
}
