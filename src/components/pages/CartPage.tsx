import { useDispatch, useSelector } from 'react-redux'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Button,
  Container,
  ButtonGroup,
  ImageListItem,
  Typography,
} from '@mui/material'
import * as actions from '../../actions'

const CartPage = () => {
  const items: any = useSelector((state) => state)
  const { cartItems } = items
  const dispatch = useDispatch()
  const addToCart = (item: any) => {
    dispatch(actions.addToCart(item))
  }

  const removeFromCart = (item: any) => {
    dispatch(actions.removeFromCart(item))
  }

  const cartQty = () => {
    return cartItems
      .map((item: any) => item.qty)
      .reduce((prev: any, curr: any) => prev + curr, 0)
  }

  const cartCost = () => {
    return cartItems
      .map((item: any) => item.qty * item.price)
      .reduce((prev: any, curr: any) => prev + curr, 0)
  }

  const CartButtons = ({ item }: any) => {
    return (
      <ButtonGroup
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Button
          sx={{ justifySelf: 'flex-start' }}
          onClick={() => removeFromCart(item)}
          variant='contained'
        >
          -
        </Button>

        <Typography sx={{ ml: 1, mr: 1 }} variant='h6'>
          {item.qty}
        </Typography>
        <Button
          sx={{ justifySelf: 'flex-end' }}
          onClick={() => addToCart(item)}
          variant='contained'
        >
          +
        </Button>
      </ButtonGroup>
    )
  }

  return (
    <>
      {cartQty() > 0 ? (
        <Paper
          sx={{
            width: '100vw',
            height: '90vh',
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ scrollBehavior: 'auto', height: '500px' }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell>
                      <ImageListItem sx={{ width: 100, height: 250 }}>
                        <img alt={item.name} src={item.pictureUrl} />
                      </ImageListItem>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align='right'>
                      <CartButtons item={item} />
                    </TableCell>
                    <TableCell align='right'>
                      {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                      }).format(item.price)}
                    </TableCell>
                    <TableCell align='right'>
                      {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                      }).format(item.qty * item.price)}
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell />
                  <TableCell align='left'>Subtotal</TableCell>

                  <TableCell align='center'>{cartQty()}</TableCell>
                  <TableCell />
                  <TableCell align='right'>
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    }).format(cartCost())}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell colSpan={2}>Shipping</TableCell>
                  <TableCell />
                  <TableCell align='right'>
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    }).format(1000)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell colSpan={2}>Tax</TableCell>
                  <TableCell />
                  <TableCell align='right' colSpan={1}>
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    }).format(1000)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell />
                  <TableCell align='right'>
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    }).format(cartCost() + 2000)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}
          >
            <Button variant='contained' sx={{ mr: 2 }}>
              Check Out
            </Button>
          </Typography>
        </Paper>
      ) : (
        <Paper
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Cart is Empty
        </Paper>
      )}
    </>
  )
}

export default CartPage
