import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  Image,
  TouchableHighlight,
  Alert,
  Modal
} from "react-native";

export default class ScoreView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: true
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { previousWinner, player1, player2 } = this.props.route.params;
    return (
      <View style={{ flex: 1 }}>
        {/* ---------------------------------------MODAL VIEW-------------------------------------- */}
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View>
                <Text
                  style={{ marginBottom: 50, fontSize: 20, fontWeight: "bold" }}
                >
                  Previous winner is {previousWinner}
                </Text>
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text style={styles.textButton}>Okay !</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
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
            <View style={{ flex: 1.5 }}>
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/players.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={styles.baseText}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              >
                 {player1}
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={styles.baseText}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              >
                {player2}
              </Text>
            </View>
          </View>
          {/* ------------------ROW SCORE-----------------------------------------BLUE CARDS------ */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, backgroundColor: "#b2c0e5" }}>
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/blueCard.png")}
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/greenCard.png")}
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/yellowCard.png")}
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/purpleCard.png")}
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/wondersCard.png")}
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/scienceItem.png")}
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/coin.png")}
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/militaryScore.png")}
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/sumScore.png")}
              />
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/militaryVictory.png")}
              />
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
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/scienceVictory.png")}
              />
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
          <TouchableOpacity style={styles.button} onPress={() => null}>
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
    backgroundColor: "#972a2a",
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
