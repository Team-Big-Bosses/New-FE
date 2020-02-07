import { createStore, combineReducers } from 'redux'
import playerReducer from '../components/player/reducer'
import mapReducer from '../components/map/reducer'
import dialogueReducer from '../components/dialogue/reducer'
import itemsReducer from '../components/items/reducer'
import inventoryReducer from '../components/inventory/reducer'

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    dialogue: dialogueReducer,
    items: itemsReducer,
    inventory: inventoryReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store