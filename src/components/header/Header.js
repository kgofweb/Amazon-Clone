import { Link } from 'react-router-dom'
import { 
  HeaderStyled,
  HeaderSearch,
  HeaderNav,
  HeaderOption,
  HeaderOptionCountry,
  HeaderOptionLineOne,
  HeaderOptionLineTwo,
  HeaderCountry,
  SelectCountry,
  HeaderOptionBasket
} from "./Header.styled"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCartOutlined'
// Use the context
import { useStateValue } from '../stateProvider/StateProvider'
import { auth } from '../firebase/firebase'

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue()

  // Déconneter correctement l'utilisateur
  const handleAuthentication = () => {
    if(user) {
      auth.signOut()
    }
  }

  return (
    <HeaderStyled>
      {/* Logo */}
      <Link to='/'>
        <img 
          className="logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon clone" 
        />
      </Link>

      <Link to='/' style={{ textDecoration: 'none' }}>
        <HeaderOptionCountry>
          <HeaderOptionLineOne>Deliver to</HeaderOptionLineOne>
          <HeaderCountry>United States</HeaderCountry>
        </HeaderOptionCountry>
      </Link>

      {/* Search Box */}
      <HeaderSearch>
        <select>
          <option>All</option>
          <option>Men's Fanshion</option>
          <option>Women's Fanshion</option>
          <option>Boys's Fanshion</option>
          <option>Girls's Fanshion</option>
          <option>Video Prime</option>
          <option>Digital Music</option>
          <option>Electronics</option>
          <option>Deals</option>
          <option>Books</option>
          <option>Babys</option>
        </select>
        <input type="text" />
        <SearchIcon className="search__icon" />
      </HeaderSearch>

      {/* Header Nav */}
      <HeaderNav>
        <SelectCountry>
          <img className="country__logo" src="https://www.countryflags.io/us/flat/48.png" alt="flag" />
          <select></select>
        </SelectCountry>

        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <HeaderOption onClick={handleAuthentication}>
            <HeaderOptionLineOne>
              Hello {!user ? '' : user.email}
            </HeaderOptionLineOne>
            <HeaderOptionLineTwo>
              {user ? 'Sign Out' : 'Sign In'}
            </HeaderOptionLineTwo>
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
            <span style={{ color: '#ff9900', fontWeight: '700' }}>{basket?.length}</span>
          </HeaderOptionBasket>
        </Link>
      </HeaderNav>
    </HeaderStyled>
  )
}

export default Header
