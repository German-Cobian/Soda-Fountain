import { BUY_ICECREAM } from './iceCreamTypes'

export const buyIceCream = (quantity = 1) => { // "(quantity = 1)" used for inputing
  return {
    type: BUY_ICECREAM,
    payload: quantity // "quantity" used for inputing
  }
}