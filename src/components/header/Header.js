import { Link } from 'react-router-dom'
import { 
  HeaderStyled,
  HeaderSearch,
  HeaderNav,
  HeaderOption,
  HeaderOptionLineOne,
  HeaderOptionLineTwo,
  HeaderOptionBasket
} from "./Header.styled"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

const Header = () => {
  return (
    <HeaderStyled>
      {/* Logo */}
      <Link to='/'>
        <img 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon clone" 
        />
      </Link>

      {/* Search Box */}
      <HeaderSearch>
        <input type="text" />
        <SearchIcon className="search__icon" />
      </HeaderSearch>

      {/* Header Nav */}
      <HeaderNav>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <HeaderOption>
            <HeaderOptionLineOne>Hello</HeaderOptionLineOne>
            <HeaderOptionLineTwo>Sign In</HeaderOptionLineTwo>
          </HeaderOption>
        </Link>

        <Link to='/' style={{ textDecoration: 'none' }}>
          <HeaderOption>
            <HeaderOptionLineOne>Retuns</HeaderOptionLineOne>
            <HeaderOptionLineTwo>& Order</HeaderOptionLineTwo>
          </HeaderOption>
        </Link>

        <Link to='/' style={{ textDecoration: 'none' }}>
          <HeaderOption>
            <HeaderOptionLineOne>Your</HeaderOptionLineOne>
            <HeaderOptionLineTwo>Prime</HeaderOptionLineTwo>
          </HeaderOption>
        </Link>

        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <HeaderOptionBasket>
            {/* Basket Icon */}
            <ShoppingBasketIcon />
            {/* Number items in the basket */}
            <span>0</span>
          </HeaderOptionBasket>
        </Link>
      </HeaderNav>

      {/* Baskets Icon */}
    </HeaderStyled>
  )
}

export default Header
