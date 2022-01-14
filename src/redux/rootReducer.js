import { combineReducers } from 'redux'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,              // component "IceCreamContainer" will need to access state object using "cake"
  iceCream: iceCreamReducer       // component "IceCreamContainer" will need tyo acces state object using "iceCream"
})

export default rootReducer