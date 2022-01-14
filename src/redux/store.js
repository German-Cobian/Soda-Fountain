import { createStore } from 'redux'
import rootReducer from './rootReducer' // Use when more than one component

const store = createStore(rootReducer) // Use rootReducer when more than one component

export default store