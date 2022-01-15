import { BUY_ICECREAM } from './iceCreamTypes'

export const buyIceCream = (quantity = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: quantity
  }
}