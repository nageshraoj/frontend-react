import * as actions from '../actions'



export const cartReducer = (state = [], action: any) => {
  switch (action.type) {
    case actions.types.ADD_ITEM_TO_CART:
      const item = {
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        brand: action.payload.brand,
        rating: action.payload.rating,
        type: action.payload.type,
        qty: 1,
        pictureUrl: action.payload.pictureUrl,
        quantityInStock: action.payload.quantityInStock,
      }
      let found = false
      const prods = state.map((p: any) => {
        if (p.id === item.id) {
          p.qty = p.qty + 1
          found = true
          return p
        } else {
          return p
        }
      })
      if (!found) return [...prods, item]
      return prods
    case actions.types.REMOVE_ITEM_FROM_CART:
      const items = state.filter((item: any) => {
        if (item.id === action.payload.id) {
          if (item.qty === 1) return null
          item.qty = item.qty - 1
          return item
        } else {
          return item
        }
      })
      return items
    default:
      return state
  }
}
