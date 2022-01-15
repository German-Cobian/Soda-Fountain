import { BUY_CAKE } from './cakeTypes'

export const buyCake = (quantity = 1) => { // "(quantity = 1)" used for inputing
  return {
    type: BUY_CAKE,
    payload: quantity // "quantity" used for inputing
  }
}