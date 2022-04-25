import CartPage from './components/pages/CartPage'
import HomePage from './components/pages/HomePage'
import OrdersPage from './components/pages/OrdersPage'
import ProductsPage from './components/pages/ProductsPage'
import ProfilePage from './components/pages/ProfilePage'
import {
  ListAlt,
  ShoppingCart,
  Inventory,
  Person,
  Home,
} from '@mui/icons-material'

export const routetable = [
  { path: '/home', lable: 'Home', icons: Home, element: HomePage },
  {
    path: '/products',
    lable: 'Products',
    icons: Inventory,
    element: ProductsPage,
  },
  { path: '/cart', lable: 'Cart', icons: ShoppingCart, element: CartPage },
  {
    path: '/orders',
    lable: 'Orders',
    icons: ListAlt,
    element: OrdersPage,
  },
  {
    path: '/user',
    lable: 'Profile',
    icons: Person,
    element: ProfilePage,
  },
]

export interface product {
  name: string
  description: string
  price: number
  rating: number
  brand: string
  type: string
  pictureUrl: string
  quantityInStock: number
}


export interface cartitems {
  name: string
  description: string
  price: number
  rating: number
  brand: string
  type: string
  qty:number
  pictureUrl: string
  quantityInStock: number
}
