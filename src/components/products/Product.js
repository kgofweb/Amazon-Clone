import { 
  ProductStyled,
  ProductRating,
  ProductPrice,
  ProductInfo
} from "./Product.styled"
import { useStateValue } from "../stateProvider/StateProvider";
import { actionTypes } from "../reducer/reducer";
import StarIcon from '@material-ui/icons/Star'

const Product = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue()

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    })
  }

  return <ProductStyled>
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
            <StarIcon style={{ color: '#f0c14b' }}/>
          ))}
      </ProductRating>
    </ProductInfo>
    <img src={image} alt="Amazon product" />
    <button onClick={addToBasket}>Add to basket</button>
  </ProductStyled>
}

export default Product