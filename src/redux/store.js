import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'; // for devtools

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger))) 
// "composeWithDevTools() added for devtools usage"

export default store

// Documentation for devtools at https://github.com/zalmoxisus/redux-devtools-extension
// Got to Usage section 1.3 "1.3 Use redux-devtools-extension package from npm" for instructions
