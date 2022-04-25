import { combineReducers } from 'redux'
import { productReducer } from './productsReducer'
import { cartReducer } from './cartReducer'

export default combineReducers({
  products: productReducer,
  cartItems: cartReducer,
})
