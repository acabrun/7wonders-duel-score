import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Modal
} from "react-native";
import { connect } from "react-redux";

class ModalViewWinner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleHide() {
    this.props.onHide(false);
  }

  _saveGame() {
    const paramsMatch = [
      {
        idGame: this.props.idMatch + 1,
        dateGame: "2020-02-15",
        scoreGame: this.props.score,
        winNameGame: this.props.winner
      }
    ]

    const action = { type: "ADD_GAME", value: paramsMatch }  // to do: gameParams like "this.state.gameParams"
    this.props.dispatch(action)
  }

  componentDidUpdate() {
    console.log(this.props.gameSaved)
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={true}
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
                {this.props.winner} win !
              </Text>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.handleHide()}
              >
                <Text style={styles.textButton}>Okay !</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={() => this._saveGame()}>
                <Text style={styles.textButton}>Save</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
    backgroundColor: "#e3cfad",
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  textButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  textInput: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1
  }
});

const mapStateToProps = (state) => {
  return {
    gameSaved: state.gameSaved
  }
}
export default connect(mapStateToProps)(ModalViewWinner)