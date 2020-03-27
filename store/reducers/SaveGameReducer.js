const initialState = { gameSaved: [] };

function saveGame(state = initialState, action) {
  let nextState;
  let itemMatch;
  let itemGame;
  switch (action.type) {
    case "ADD_GAME":
      const matchSavedIndex = state.gameSaved.findIndex(
        item => (itemMatch = item.idMatch) === action.value.idMatch
      );
      
      if (matchSavedIndex !== -1) {
        // Match already exist, check if game exist
        console.log('Contenue de gameSaved | '+ state.gameSaved[matchSavedIndex].paramsMatch.idGame)
        const oldIdGame = state.gameSaved[matchSavedIndex].paramsMatch.idGame
        const newIdGame = action.value.paramsMatch.idGame
        
        if (oldIdGame === newIdGame) {
          // Game already exist
          console.log('Game already exist');
        } else {
          // Save new game
          console.log('New game saved');
          nextState = {
            ...state,
            gameSaved: [...state.gameSaved[matchSavedIndex].paramsMatch, action.value.paramsMatch] // concatenation
          };
          
        }
      } else {
        // Save new match
        nextState = {
          ...state,
          gameSaved: [...state.gameSaved, action.value] // concatenation
        };
        console.log(
          "Match saved " +
            "| itemMatch " +
            itemMatch +
            " |idMatch " +
            action.value.idMatch
        );
      }
      return nextState || state; // mean if undefined return state

    default:
      return state;
  }
}

export default saveGame;
