import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Grid,
  Paper,
  Button,
  Rating,
  Stack,
  Typography,
  ButtonGroup,
  Container,
} from '@mui/material'
import * as actions from '../../actions'

const Product = () => {
  const { id } = useParams()
  const items: any = useSelector((state: any) => state.products)

  const cartItems = useSelector((state: any) => state.cartItems)

  const item = items.find((p: any) => p.id === id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getProductsRequest())
  }, [dispatch])

  const navigate = useNavigate()

  const addToCart = () => {
    dispatch(actions.addToCart(item))
  }

  const removeFromCart = () => {
    dispatch(actions.removeFromCart(item))
  }

  const countItems = () => {
    const cart = cartItems.filter((cart: any) => cart.id === item.id && cart)
    if (cart.length === 0) return
    return cart[0].qty
  }

  const CartButtons = () => {
    return (
      <ButtonGroup
        sx={{
          display: countItems() > 0 ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Button
          sx={{ justifySelf: 'flex-start' }}
          onClick={() => removeFromCart()}
          variant='contained'
        >
          -
        </Button>

        <Typography sx={{ ml: 1, mr: 1 }} variant='h6'>
          {countItems()}
        </Typography>
        <Button
          sx={{ justifySelf: 'flex-end' }}
          onClick={() => addToCart()}
          variant='contained'
        >
          +
        </Button>
      </ButtonGroup>
    )
  }

  return (
    <>
      {
        <Paper sx={{ height: '100vh', width: '100vw' }}>
          <Container>
            <Button size='small' onClick={() => navigate(-1)}>
              Back
            </Button>
            <Grid container spacing={2}>
              <Grid item xs={2} md={4}>
                <Stack direction='column' spacing={2}>
                  {item.name}
                  <img
                    style={{ height: '300px', width: '200px' }}
                    src={item.pictureUrl}
                    alt={item.name}
                  />
                </Stack>
              </Grid>

              <Grid item xs={6} md={4}>
                <Stack direction='column' spacing={2}>
                  <Typography variant='inherit' sx={{ fontSize: 20 }}>
                    {item.description}
                  </Typography>

                  <Typography variant='inherit' sx={{ fontSize: 12 }}>
                    Rating :{' '}
                    <Rating
                      readOnly
                      value={item.rating}
                      sx={{ fontSize: 12 }}
                    />
                  </Typography>
                  <Typography
                    variant='inherit'
                    sx={{ fontSize: 18, fontWeight: 'bold' }}
                  >
                    Rate:
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    }).format(item.price)}
                  </Typography>
                  <Typography variant='inherit'>
                    <Button
                      variant='contained'
                      sx={{
                        display: countItems() > 0 ? 'none' : 'block',
                        fontSize: 12,
                        width: '100%',
                      }}
                      onClick={() => addToCart()}
                    >
                      Add To Cart
                    </Button>
                    <CartButtons />
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      }
    </>
  )
}

export default Product
