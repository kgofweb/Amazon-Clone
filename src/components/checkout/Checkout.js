import { useStateValue } from "../stateProvider/StateProvider"
import { CheckoutStyled, CheckoutTitle } from "./Checkout.styled"
import CheckoutProduct from "../checkoutProduct/CheckoutProduct"
import SubTotal from "../subTotal/SubTotal"

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <CheckoutStyled>
      <div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon"
        />

        {basket?.length === 0 ? (
          <>
            <h3>Hello {user?.email}</h3>
            <CheckoutTitle>
              Your Shopping basket is empty
            </CheckoutTitle>
            <p>
              You have no item in ypur basket. To buy one or more items, 
              click 'Add to basket' next to the item.
            </p>
          </>
        ): (
          <>
            <h3>Hello {user?.email}</h3>
            <CheckoutTitle>
              Your Sopping basket
            </CheckoutTitle>

            {/* List all of the checkout products */}
            {basket?.map((item, key) => (
              <CheckoutProduct
                key={key}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </>
        )}
      </div>

      {basket.length >= 0 && (
        <SubTotal />
      )}
    </CheckoutStyled>
  )
}

export default Checkout
