import * as action from '../actions'



export const productReducer = (state = [], actions: any) => {
  switch (actions.type) {
    case action.types.GET_PRODUCTS_SUCCESS:
      return actions.payload
    default:
      return state
  }
}
