import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  Image,
} from "react-native";
import ModalView from "./ModalView";
import ModalViewWinner from "./ModalViewWinner";

export default class ScoreView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      p1v1: "",
      p1v2: "",
      p1v3: "",
      p1v4: "",
      p1v5: "",
      p1v6: "",
      p1v7: "",
      p1v8: "",
      p2v1: "",
      p2v2: "",
      p2v3: "",
      p2v4: "",
      p2v5: "",
      p2v6: "",
      p2v7: "",
      p2v8: "",
      sumPlayer1: 0,
      sumPlayer2: 0,
      displayWinner: false,
      winner: "",
      p1VicMil: false,
      p2VicMil: false,
      p1VicSci: false,
      p2VicSci: false,
    };
  }

  handleSumPlayer = () => {
    const {
      p1v1,
      p1v2,
      p1v3,
      p1v4,
      p1v5,
      p1v6,
      p1v7,
      p1v8,
      p2v1,
      p2v2,
      p2v3,
      p2v4,
      p2v5,
      p2v6,
      p2v7,
      p2v8,
    } = this.state;
    this.setState(
      {
        sumPlayer1:
          Number(p1v1) +
          Number(p1v2) +
          Number(p1v3) +
          Number(p1v4) +
          Number(p1v5) +
          Number(p1v6) +
          Number(p1v7) +
          Number(p1v8),
      },
      () => console.log(this.state.sumPlayer1)
    );
    this.setState(
      {
        sumPlayer2:
          Number(p2v1) +
          Number(p2v2) +
          Number(p2v3) +
          Number(p2v4) +
          Number(p2v5) +
          Number(p2v6) +
          Number(p2v7) +
          Number(p2v8),
      },
      () => console.log(this.state.sumPlayer2)
    );
    this.handleModal();
  };

  handleModal = () => {
    this.setState({ displayWinner: true }, () => this.checkWinner());
  };

  handleOnHide() {
    this.setState({ displayWinner: false });
  }

  checkWinner = () => {
    if (
      this.state.sumPlayer1 > this.state.sumPlayer2 ||
      this.state.p1VicMil ||
      this.state.p1VicSci
    )
      this.setState({ winner: this.props.route.params.player1 });
    else if (
      this.state.sumPlayer2 > this.state.sumPlayer1 ||
      this.state.p2VicMil ||
      this.state.p2VicSci
    )
      this.setState({ winner: this.props.route.params.player2 });
  };

  handleCheckBoxP1Mil = () => {
    this.setState({ p1VicMil: !this.state.p1VicMil });
  };

  handleCheckBoxP2Mil = () => {
    this.setState({ p2VicMil: !this.state.p2VicMil });
  };

  handleCheckBoxP1Sci = () => {
    this.setState({ p1VicSci: !this.state.p1VicSci });
  };

  handleCheckBoxP2Sci = () => {
    this.setState({ p2VicSci: !this.state.p2VicSci });
  };

  handleRestart = () => {
    this.setState({
      p1v1: "",
      p1v2: "",
      p1v3: "",
      p1v4: "",
      p1v5: "",
      p1v6: "",
      p1v7: "",
      p1v8: "",
      p2v1: "",
      p2v2: "",
      p2v3: "",
      p2v4: "",
      p2v5: "",
      p2v6: "",
      p2v7: "",
      p2v8: "",
      sumPlayer1: 0,
      sumPlayer2: 0,
      displayWinner: false,
      winner: "",
      p1VicMil: false,
      p2VicMil: false,
      p1VicSci: false,
      p2VicSci: false,
    });
  };

  render() {
    const {
      paramsMatch,
      player1,
      player2,
      idMatch,
      isNewMatch,
    } = this.props.route.params;

    return (
      <View style={{ flex: 1 }}>
        {/* ---------------------------------------MODAL VIEW-------------------------------------- */}
        {isNewMatch ? null : (
          <ModalView
            previousWinner={paramsMatch[paramsMatch.length - 1].winNameGame}
          />
        )}

        {/* ---------------------------------MODAL VIEW WINNER---------------------------------- */}
        {this.state.displayWinner === true ? (
          <ModalViewWinner
            idMatch={idMatch}
            // idGame={idGame}
            player1={player1}
            player2={player2}
            score={[this.state.sumPlayer1, this.state.sumPlayer2]}
            winner={this.state.winner}
            show={this.state.displayWinner}
            onHide={() => this.handleOnHide()}
            isNewMatch={isNewMatch}
          />
        ) : null}
        <View
          style={{
            flex: 6,
            backgroundColor: "white",
            // justifyContent: "space-around",
            alignItems: "stretch",
            marginBottom: 5,
            marginTop: 10,
          }}
        >
          {/* ------------------ROW SCORE-------------------------------------------PLAYER----- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1.5, borderWidth: 1 }}>
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
                borderTopWidth: 2,
                alignItems: "center",
                justifyContent: "center",
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
                borderTopWidth: 2,
                alignItems: "center",
                justifyContent: "center",
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
            <View
              style={{ flex: 1.5, backgroundColor: "#b2c0e5", borderWidth: 1 }}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/blueCard.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#b2c0e5",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p1v1) => this.setState({ p1v1 })}
                value={this.state.p1v1}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#b2c0e5",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p2v1) => this.setState({ p2v1 })}
                value={this.state.p2v1}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE----------------------------------------GREEN CARDS------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "#aebc96", borderWidth: 1 }}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/greenCard.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#aebc96",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p1v2) => this.setState({ p1v2 })}
                value={this.state.p1v2}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#aebc96",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p2v2) => this.setState({ p2v2 })}
                value={this.state.p2v2}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE------------------------------------------YELLOW CARDS------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "#e3cfa2", borderWidth: 1 }}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/yellowCard.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#e3cfa2",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p1v3) => this.setState({ p1v3 })}
                value={this.state.p1v3}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#e3cfa2",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p2v3) => this.setState({ p2v3 })}
                value={this.state.p2v3}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE----------------------------------------PURPLE CARDS-------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "#b79cbe", borderWidth: 1 }}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/purpleCard.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#b79cbe",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p1v4) => this.setState({ p1v4 })}
                value={this.state.p1v4}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#b79cbe",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p2v4) => this.setState({ p2v4 })}
                value={this.state.p2v4}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE------------------------------------WONDERS CARDS--------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "#cec4d1", borderWidth: 1 }}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/wondersCard.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#cec4d1",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p1v5) => this.setState({ p1v5 })}
                value={this.state.p1v5}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#cec4d1",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p2v5) => this.setState({ p2v5 })}
                value={this.state.p2v5}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE---------------------------------------SCIENCE ITEM-------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "#95c29a", borderWidth: 1 }}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/scienceItem.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#95c29a",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p1v6) => this.setState({ p1v6 })}
                value={this.state.p1v6}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#95c29a",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p2v6) => this.setState({ p2v6 })}
                value={this.state.p2v6}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE----------------------------------------COIN--------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "#dfc6ba", borderWidth: 1 }}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/coin.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#dfc6ba",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p1v7) => this.setState({ p1v7 })}
                value={this.state.p1v7}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#dfc6ba",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p2v7) => this.setState({ p2v7 })}
                value={this.state.p2v7}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE------------------------------------MILITARY SCORE--------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "#d398a0", borderWidth: 1 }}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={require("../icons/militaryScore.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#d398a0",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p1v8) => this.setState({ p1v8 })}
                value={this.state.p1v8}
              />
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#d398a0",
                alignItems: "center",
                borderWidth: 1,
              }}
            >
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(p2v8) => this.setState({ p2v8 })}
                value={this.state.p2v8}
              />
            </View>
          </View>
          {/* ------------------ROW SCORE-----------------------------------SUM SCORE-------------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "black", borderWidth: 1 }}
            >
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
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={styles.baseText}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              >
                {this.state.sumPlayer1}
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={styles.baseText}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              >
                {this.state.sumPlayer2}
              </Text>
            </View>
          </View>
          {/* ------------------ROW SCORE-------------------------------------MILITARY VICTORY------------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ flex: 1.5, backgroundColor: "#972a2a", borderWidth: 1 }}
            >
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
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckBox
                  value={this.state.p1VicMil}
                  onValueChange={this.handleCheckBoxP1Mil}
                />
              </View>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#972a2a",
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckBox
                  value={this.state.p2VicMil}
                  onValueChange={this.handleCheckBoxP2Mil}
                />
              </View>
            </View>
          </View>
          {/* ------------------ROW SCORE-------------------------------------SCIENCE VICTORY--------------- */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1.5,
                backgroundColor: "#265c3a",
                borderWidth: 1,
                borderBottomWidth: 2,
              }}
            >
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
                borderWidth: 1,
                borderBottomWidth: 2,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckBox
                  value={this.state.p1VicSci}
                  onValueChange={this.handleCheckBoxP1Sci}
                />
              </View>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: "#265c3a",
                borderColor: "black",
                borderWidth: 1,
                borderBottomWidth: 2,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckBox
                  value={this.state.p2VicSci}
                  onValueChange={this.handleCheckBoxP2Sci}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            backgroundColor="blue"
            onPress={this.handleSumPlayer}
          >
            <Text style={styles.textButton}> Check winner </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleRestart}>
            <Text style={styles.textButton}> Restart </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e3cfad",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  textButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  textInput: {
    flex: 1,
    borderWidth: 0,
  },
});
