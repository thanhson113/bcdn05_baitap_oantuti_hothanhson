import {combineReducers,createStore} from 'redux'
import {gameOanTuTiReducer} from './GameOanTuTiReducer'

const rootReducer = combineReducers({
    gameOanTuTiReducer,
})
export const store = createStore(rootReducer)