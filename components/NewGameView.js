import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class NewGameView extends Component {
  render() {
    //const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 6,
            backgroundColor: "white",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Text style={styles.baseText}>Who are playing ?</Text>
          <TextInput
            style={{
              height: 40,
              width: 250,
              borderColor: "gray",
              borderWidth: 1
            }}
            placeholder=" Player 1"
            //onChangeText={text => onChangeText(text)}
            //value={value}
          />
          <TextInput
            style={{
              height: 40,
              width: 250,
              borderColor: "gray",
              borderWidth: 1
            }}
            placeholder=" Player 2"
            //onChangeText={text => onChangeText(text)}
            //value={value}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            backgroundColor: "white"
          }}
        >
          <TouchableOpacity
            style={styles.button}
            backgroundColor="blue"
            onPress={() => null}
          >
            <Text style={styles.textButton}> Start game </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18
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
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
