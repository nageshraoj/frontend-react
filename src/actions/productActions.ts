import { types } from './actiontypes'
export const getProductsRequest = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  }
}

export const getProductsSuccess = (products: any) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload: products,
  }
}
