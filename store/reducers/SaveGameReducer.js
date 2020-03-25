const initialState = { gameSaved: [] }

function saveGame(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_GAME':
            const gameSavedIndex = state.gameSaved.findIndex(item => item.id === action.value.idMatch)
            if(gameSavedIndex ==! -1) {
                // Game already saved
                console.log('Game already saved')
            }else {
                // Save game
                nextState = {
                    ...state,
                    gameSaved: [ ...state.gameSaved, action.value ]  // concatenation
                }
                console.log('Game saved')
            }
            return nextState || state  // mean if undefined return state
    
        default:
            return state
    }
}

export default saveGame