import { 
  SubTotalStyled,
  SubTotalGift,
} from "./SubTotal.styled"
import CurrentFormat from 'react-currency-format'
import { useStateValue } from "../stateProvider/StateProvider"

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue()

  // Add up the price
  const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
  )

  return (
    <SubTotalStyled>
      <CurrentFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <SubTotalGift>
              <div>
                <input type="checkbox" /> 
              </div>
              <div>
                <p>This order contains a gift</p>
              </div>
            </SubTotalGift>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Process to Checkout</button>
    </SubTotalStyled>
  )
}

export default SubTotal
