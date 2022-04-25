import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Global, css } from '@emotion/react'
import { routetable } from '../../constants'
import Header from './Header'
import Product from './Product'

const App = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            background-color: #3c3f3f;
          }
        `}
      />
      <BrowserRouter>
        <Header />
        <Routes>
          {routetable.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
