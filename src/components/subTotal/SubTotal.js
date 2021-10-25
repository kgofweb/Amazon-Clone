import { 
  SubTotalStyled,
  SubTotalGift,
} from "./SubTotal.styled"
import { getBasketTotal } from "../reducer/reducer"
import CurrentFormat from 'react-currency-format'
import { useStateValue } from "../stateProvider/StateProvider"
import { useHistory } from "react-router"

function SubTotal() {
  const history = useHistory()
  const [{ basket }, dispatch] = useStateValue()

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
      <button onClick={e => history.push('/payment')}>Process to Checkout</button>
    </SubTotalStyled>
  )
}

export default SubTotal
