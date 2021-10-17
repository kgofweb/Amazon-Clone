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

const CheckoutProduct = ({id, title, price, rating, image}) => {
  const [{basket}, dispatch] = useStateValue()

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
              <p>🌟</p>
            ))}
        </ProductRating>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </ProductInfo>
    </CheckoutProductStyled>
  )
}

export default CheckoutProduct
