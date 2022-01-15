import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk' // Added for async functions

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk))) // "thunk" added as argument

export default store
