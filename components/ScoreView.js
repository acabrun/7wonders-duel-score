import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox
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
            // justifyContent: "space-around",
            alignItems: "stretch"
          }}
        >
          {/* ------------------ROW SCORE-------------------------------------------PLAYER----- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "black" }}>
              <Text> png</Text>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={styles.baseText}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              >
                {" "}
                Player 1
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={styles.baseText}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              >
                {" "}
                Player 2
              </Text>
            </View>
          </View>
          {/* ------------------ROW SCORE-----------------------------------------BLUE CARDS------ */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#b2c0e5" }}>
              <Text> png</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "#b2c0e5" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{ flex: 3, backgroundColor: "#b2c0e5" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE----------------------------------------GREEN CARDS------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#aebc96" }}>
              <Text> png</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "#aebc96" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{ flex: 3, backgroundColor: "#aebc96" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE------------------------------------------YELLOW CARDS------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#e3cfa2" }}>
              <Text> png</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "#e3cfa2" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{ flex: 3, backgroundColor: "#e3cfa2" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE----------------------------------------PURPLE CARDS-------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#b79cbe" }}>
              <Text> png</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "#b79cbe" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{ flex: 3, backgroundColor: "#b79cbe" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE------------------------------------WONDERS CARDS--------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#cec4d1" }}>
              <Text> png</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "#cec4d1" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{ flex: 3, backgroundColor: "#cec4d1" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE---------------------------------------SCIENCE ITEM-------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#95c29a" }}>
              <Text> png</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "#95c29a" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{ flex: 3, backgroundColor: "#95c29a" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE----------------------------------------COIN--------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#dfc6ba" }}>
              <Text> png</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "#dfc6ba" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{ flex: 3, backgroundColor: "#dfc6ba" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE------------------------------------MILITARY SCORE--------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#d398a0" }}>
              <Text> png</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: "#d398a0" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
            <View style={{ flex: 3, backgroundColor: "#d398a0" }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE-----------------------------------SUM SCORE-------------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "black" }}>
              <Text> png</Text>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={styles.baseText}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              >
                {" "}
                Score player 2
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <Text
                style={styles.baseText}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              >
                {" "}
                Score player 2
              </Text>
            </View>
          </View>
          {/* ------------------ROW SCORE-------------------------------------MILITARY VICTORY------------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#972a2a" }}>
              <Text> png</Text>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#972a2a",
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CheckBox />
              </View>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#972a2a",
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CheckBox />
              </View>
            </View>
          </View>
          {/* ------------------ROW SCORE-------------------------------------SCIENCE VICTORY--------------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#265c3a" }}>
              <Text> png</Text>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#265c3a",
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CheckBox />
              </View>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#265c3a",
                borderColor: "black",
                borderWidth: 1
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CheckBox />
              </View>
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
            <Text style={styles.textButton}> Check winner </Text>
          </TouchableOpacity>
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
  },
  textInput: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1
  }
});
