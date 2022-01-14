import { createStore, applyMiddleware } from 'redux' // "applyMiddleware" for use of logger
import logger from 'redux-logger' // for logger middleware
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(logger)) // "applyMiddleware(logger)" added

export default store