import { createStore } from 'redux'
import saveGame from './reducers/SaveGameReducer'

export default createStore(saveGame)