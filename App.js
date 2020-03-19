import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import StartView from "./components/StartView";
import NewGameView from "./components/NewGameView";
import ContinueView from "./components/ContinueView";
import ScoreView from "./components/ScoreView";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <View
          style={{
            flex: 0.44,
            justifyContent: "center",
            backgroundColor: "white"
          }}
        ></View>
        <View
          style={{ flex: 0.7, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.titleText}>7 Wonder duel Score</Text>
        </View>
        <View
          style={{ flex: 7, justifyContent: "center", backgroundColor: "blue" }}
        >
          {/* <StartView /> */}
          {/* <NewGameView /> */}
          {/* <ContinueView /> */}
          <ScoreView />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    marginVertical: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
