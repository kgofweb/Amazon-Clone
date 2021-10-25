import { OrdersStyled } from "./Orders.styled"
import { useState, useEffect } from "react"
import { useStateValue } from "../stateProvider/StateProvider"
import Order from "../order/Order"

import db from "../firebase/firebase"

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])

  // display the products ordered when the component is assembled
  useEffect(() => {
    // if the user exists
    if(user) {
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => (
        // display ordered products
        setOrders(snapshot.docs.map(document => ({
          id: document.id,
          data: document.data()
        })))
      ))
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <OrdersStyled>
      <h1>Your Orders</h1>

      <div className='orders__order'>
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </OrdersStyled>
  )
}

export default Orders
