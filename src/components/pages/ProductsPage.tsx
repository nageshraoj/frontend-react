import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Grid, Paper } from '@mui/material'
import * as actions from '../../actions'
import Products from '../common/Products'

const ProductsPage = () => {
  const { products }: any = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getProductsRequest())
  }, [dispatch])

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 3,
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3, mx: 4 }}
        >
          {products.map((item: any, index: any) => (
            <Paper
              key={index}
              sx={{
                padding: '10px',
                margin: '5px',
                height: '250px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#827397',
                },
              }}
            >
              <Products item={item} />
            </Paper>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default ProductsPage
