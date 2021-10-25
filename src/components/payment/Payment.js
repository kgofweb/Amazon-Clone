import { 
  PaymentStyled,
  PaymentContainer,
  PaymentSection,
  PaymentTitle,
  PaymentAdress,
  PaymentItems,
  PaymentDetails
} from "./Payment.styled"
import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { useStateValue } from "../stateProvider/StateProvider"
import { getBasketTotal } from "../reducer/reducer"
import CurrencyFormat from "react-currency-format"
import CheckoutProduct from "../checkoutProduct/CheckoutProduct"

import { actionTypes } from "../reducer/reducer"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "../axios/axios"

import db from "../firebase/firebase"

const Payment = () => {
  const [{basket, user}, dispatch] = useStateValue()
  const history = useHistory()

  // Payment system
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [processing, setProcessing] = useState("")
  const [succeeded, setSucceeded] = useState(false)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      // wait to receive data from the backend
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  // Get client secret key
  console.log('Client secret', clientSecret)
  // uid not id
  console.log('personne', user);

  // Stripe stuff
  const handleSubmit = async e => {
    // stop reloading the default page
    e.preventDefault()
    // pass the process to true in the order phase
    setProcessing(true)

    // Wait to verify the user's card
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation

      // Each user has his order
      // And it's all put together for validation
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })

      // 
      setSucceeded(true)
      setError(null)
      setProcessing(false)

      // Empty the basket after purchasing
      dispatch({
        type: actionTypes.EMPTY_BASKET
      })

      // Redirection to the order page
      history.replace('/orders')
    })
  }

  const handleChange = e => {
    /* Listen for changes in the CardElement
    and display any errors as the customer types their card details */
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

  return (
    <PaymentStyled>
      <PaymentContainer>
        <h1>
          Checkout 
          (<Link 
            to="/checkout" 
            style={{ color: '#222', fontWeight: '600' }}>
              {basket?.length} items
          </Link>)
        </h1>

        {/* Payment section - delivery address */}
        <PaymentSection>
          <PaymentTitle>
            <h3>Delivery Address</h3>
          </PaymentTitle>
          <PaymentAdress>
            <p style={{ fontWeight: '700' }}>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </PaymentAdress>
        </PaymentSection>

        {/* Payment section - Review Items */}
        <PaymentSection>
          <PaymentTitle>
            <h3>Review items and delivery</h3>
          </PaymentTitle>
          <PaymentItems>
            {basket.map((item, key) => (
              <CheckoutProduct
                key={key}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </PaymentItems>
        </PaymentSection>

        {/* Payment section - Payment method */}
        <PaymentSection>
          <PaymentTitle>
            <h3>Payment Method</h3>
          </PaymentTitle>
          <PaymentDetails>
            {/* Stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </PaymentDetails>
        </PaymentSection>
      </PaymentContainer>
    </PaymentStyled>
  )
}

export default Payment