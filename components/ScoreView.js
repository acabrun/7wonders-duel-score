import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class ScoreView extends Component {
  render() {
    //const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 6,
            backgroundColor: "white",
            justifyContent: "space-around",
            alignItems: "stretch"
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "powderblue" }}>
              <Text> png</Text>
            </View>
            <View style={{flex: 3, backgroundColor: "skyblue" }}>
              <TextInput
                style={{
                  flex: 1,
                  borderColor: "gray",
                  borderWidth: 1
                }}
                placeholder=" Player 2"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{flex: 3, backgroundColor: "steelblue" }}>
              <TextInput
                style={{
                  flex: 1,
                  borderColor: "gray",
                  borderWidth: 1
                }}
                placeholder=" Player 2"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
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
            <Text style={styles.textButton}> Restart </Text>
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
