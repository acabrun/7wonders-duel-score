import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FAKE_GAME_TAB } from "../helpers/HelpersTab";

export default function ContinueView({ navigation }) {
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

        <View>
          {Object.values(FAKE_GAME_TAB).map((game) => (
            <TouchableOpacity
              key={game.idMatch}
              style={styles.button}
              backgroundColor="green"
              onPress={() => navigation.navigate("Score", {
                previousWinner: game.previousWinNameGame,
                player1: game.player1NameMatch,
                player2: game.player2NameMatch,
                idMatch: game.idMatch
              } )}
            >
              <Text style={styles.textButton}>
                {game.player1NameMatch} Vs {game.player2NameMatch}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textButton: {
    color: "black",
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
    backgroundColor: "#e3cfad",
    padding: 10,
    margin: 10,
    borderRadius: 10
  }
});
