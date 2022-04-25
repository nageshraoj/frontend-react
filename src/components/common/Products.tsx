import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  ButtonGroup,
  Rating,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions'
import styled from '@emotion/styled'

const Products = ({ item }: any) => {
  const items = useSelector((state) => state)
  const { cartItems }: any = items
  const dispatch = useDispatch()

  const addToCart = (item: any) => {
    dispatch(actions.addToCart(item))
  }

  const removeFromCart = (item: any) => {
    dispatch(actions.removeFromCart(item))
  }

  const countItems = () => {
    const cart = cartItems.filter((cart: any) => cart.id === item.id && cart)
    if (cart.length === 0) return
    return cart[0].qty
  }

  const navigate = useNavigate()
  const routeChange = () => {
    navigate(`/product/${item.id}`)
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
          onClick={() => removeFromCart(item)}
          variant='contained'
        >
          -
        </Button>

        <Typography sx={{ ml: 1, mr: 1 }} variant='h6'>
          {countItems()}
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

  const StyledBtn = styled(CartButtons)`
    display: ${cartItems.qty > 0 ? 'block' : 'none'};
  `

  return (
    <>
      <Card sx={{ width: '200px', height: '100%' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: '#d53232' }} aria-label='recipe'>
              {item.name.substring(1, 0)}
            </Avatar>
          }
          title={item.name}
          subheader={item.brand}
          titleTypographyProps={{
            fontSize: 12,
          }}
          subheaderTypographyProps={{
            fontSize: 10,
          }}
        />
        <CardMedia
          onClick={() => routeChange()}
          component='img'
          height='60'
          width='50'
          image={item.pictureUrl}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='inherit' sx={{ fontSize: 12 }}>
            <Rating readOnly value={item.rating} sx={{ fontSize: 12 }} />
          </Typography>
          <Typography
            variant='inherit'
            sx={{ fontSize: 18, fontWeight: 'bold' }}
          >
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(item.price)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}
        >
          <Button
            variant='contained'
            sx={{
              display: countItems() > 0 ? 'none' : 'block',
              fontSize: 12,
              width: '100%',
            }}
            onClick={() => addToCart(item)}
          >
            Add To Cart
          </Button>
          <StyledBtn />
        </CardActions>
      </Card>
    </>
  )
}

export default Products
