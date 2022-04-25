import { types } from './actiontypes'
export const addToCart = (item: any) => {
  return {
    type: types.ADD_ITEM_TO_CART,
    payload: item,
  }
}

export const removeFromCart = (item: any) => {
  return {
    type: types.REMOVE_ITEM_FROM_CART,
    payload: item,
  }
}
