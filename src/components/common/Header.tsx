import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { routetable } from '../../constants'
import styled from '@emotion/styled'
import { Icon } from '@mui/material'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 50px;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  background-image: linear-gradient(to right, #5a9b9b, #10363a);
`
const NavBarItems = styled.nav`
  display: block;
  margin: auto 0 auto auto;
`

const Link = ({ isActive, children, ...props }: any) => {
  return <ReactRouterLink {...props}>{children}</ReactRouterLink>
}

const NavItem = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 5px rgba(0, 0, 0, 0.2);
  margin: 0 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.isActive ? '#8518b4' : '#1883b4')};
  color: #061781;
  display: inline-block;
  text-align: center;
  width: 70px;
  cursor: pointer;
  :hover {
    background-color: #1871dd;
  }
`

const Header = () => {
  const { pathname } = useLocation()
  const items = useSelector((state) => state)
  const { cartItems }: any = items
  const cartQty = () => {
    return cartItems
      .map((item: any) => item.qty)
      .reduce((prev: any, curr: any) => prev + curr, 0)
  }
  return (
    <>
      <HeaderWrapper>
        <NavBarItems>
          {routetable.map((route, index) => (
            <NavItem
              key={index}
              to={route.path}
              isActive={pathname === route.path}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                  margin: route.lable === 'Cart' ? '0' : '0.25rem',
                }}
              >
                <Icon component={route.icons} sx={{ fontSize: 12, mr: 1 }} />
                <span> {route.lable}</span>
                {route.lable === 'Cart' && (
                  <Typography
                    variant='overline'
                    sx={{
                      position: 'relative',
                      top: '-.5rem',
                      fontWeight: 'bold',
                      color: '#11cfa9',
                      fontSize: 8,
                      marginLeft: '.5rem',
                    }}
                  >
                    {cartQty()}
                  </Typography>
                )}
              </div>
            </NavItem>
          ))}
        </NavBarItems>
      </HeaderWrapper>
    </>
  )
}

export default Header
