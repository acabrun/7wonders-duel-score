import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>7 Wonder Score</Text>
        </View>
        <View>
          <Button title="Continue" color="green" onPress={() => null} />
          <Button title="New game" onPress={() => null} />
        </View>
      </View>
    );
  }
}
