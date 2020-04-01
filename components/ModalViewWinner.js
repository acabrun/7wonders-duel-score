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
import moment from "moment";

class ModalViewWinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false
    };
  }

  handleHide() {
    this.props.onHide(false);
  }

  _saveGame = () => {
    const GAME_TAB = {
      idMatch: this.state.idMatch,
      player1NameMatch: this.props.player1,
      player2NameMatch: this.props.player2,
      paramsMatch: {
        idGame: this.state.idGame,
        dateGame: moment().format("DD-MM-YYYY"),
        scoreGame: this.props.score,
        winNameGame: this.props.winner
      }
    };

    const action = { type: "ADD_GAME", value: GAME_TAB };
    this.props.dispatch(action);
  };

  _setIdMatch = () => {
    // Continue existing match
    if (this.props.idMatch) {
      this._setIdGame();
      this.setState({ idMatch: this.props.idMatch }, () => this._saveGame());
    }
    else { // Create new match
      // First match 
      if (this.props.gameSaved.join() === [].join()) {
        this._setIdGame();
        this.setState({ idMatch: 1 }, () => this._saveGame());
        this.setState({ isSaved: true })
      }
      // Another match exist
      else if(!this.state.isSaved) { 
        this._setIdGame();
        this.setState(
          {
            idMatch:
              this.props.gameSaved[this.props.gameSaved.length - 1].idMatch + 1
          },
          () => this._saveGame()
        );
      }
      else return
    }
  };

  _setIdGame = () => {
    // Continue match and add game
    if (this.props.idGame)
      this.setState({ idGame: this.props.idGame + 1 });
    // Create new match
    else {
      // First match
      if (this.props.gameSaved.join() === [].join()) {
        console.log('First game')
        this.setState({ idGame: 1 });
      }
      // Another match exist 
      else {
        if (typeof(this.props.gameSaved[this.state.idMatch-1].paramsMatch) === "Object") {
          console.log('Object')
        }
      }
    }
  }

  componentDidUpdate() {
    console.log(this.props.gameSaved);
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
              <TouchableHighlight
                style={styles.button}
                onPress={() => this._setIdMatch()}
              >
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

const mapStateToProps = state => {
  return {
    gameSaved: state.gameSaved
  };
};
export default connect(mapStateToProps)(ModalViewWinner);
