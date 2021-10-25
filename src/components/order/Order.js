import { 
  OrderStyled,
  OrderId,
  OrderTotal
} from "./Order.styled"
import moment from 'moment'
import CurrencyFormat from "react-currency-format"
import CheckoutProduct from "../checkoutProduct/CheckoutProduct"

const Order = ({ order }) => {
  return (
    <OrderStyled>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <OrderId>
        <small>{order.id}</small>
      </OrderId>
      {order.data.basket?.map((item, key) => (
        <CheckoutProduct
          key={key}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <OrderTotal>Order Total: <b>{value}</b></OrderTotal>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </OrderStyled>
  )
}

export default Order
