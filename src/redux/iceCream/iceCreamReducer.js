import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
  numOfIceCreams: 100
}

export const iceCreamReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams = action.payload
    }
    default: return state
  }
}

export default iceCreamReducer