import { 
  ProductPrice, 
  ProductRating
} from "../products/Product.styled"
import { 
  CheckoutProductStyled, 
  ProductInfo
} from "./CheckoutProduct.styled"
import { useStateValue } from "../stateProvider/StateProvider"
import { actionTypes } from "../reducer/reducer"
import StarIcon from '@material-ui/icons/Star'

const CheckoutProduct = ({id, title, price, rating, image}) => {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    // Remove item from basket
    dispatch({
      type: actionTypes.REMOVE_TO_BASKET,
      id,
    })
  }

  return (
    <CheckoutProductStyled>
      <img src={image} alt='Amazon'/>

      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </ProductPrice>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon style={{ color: '#f0c14b', fontSize: '16px', marginTop: '5px' }}/>
            ))}
        </ProductRating>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </ProductInfo>
    </CheckoutProductStyled>
  )
}

export default CheckoutProduct
