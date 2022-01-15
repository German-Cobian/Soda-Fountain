import { combineReducers } from 'redux'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer' // Added for async functions

const rootReducer = combineReducers({
  cake: cakeReducer,      
  iceCream: iceCreamReducer,
  user: userReducer  // Added for async functions
})

export default rootReducer