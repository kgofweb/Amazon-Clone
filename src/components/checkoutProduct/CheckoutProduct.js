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

// import db from "../firebase/firebase"

const CheckoutProduct = ({id, title, price, rating, image, hideButton}) => {
  const [{ basket, user }, dispatch] = useStateValue()
  // const [orders, setOrders] = useState([])

  // useEffect(() => {
  //   // if the user exists
  //   if(user) {
  //     db
  //     .collection('users')
  //     .doc(user?.uid)
  //     .collection('orders')
  //     .orderBy('created', 'desc')
  //     .onSnapshot(snapshot => (
  //       // display ordered products
  //       setOrders(snapshot.docs.map(document => ({
  //         id: document.id,
  //         data: document.data()
  //       })))
  //     ))
  //   } else {
  //     setOrders([])
  //   }
  // }, [user])

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
        {/* Hidden for the order page */}
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </ProductInfo>
    </CheckoutProductStyled>
  )
}

export default CheckoutProduct
