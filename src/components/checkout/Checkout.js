import { useStateValue } from "../stateProvider/StateProvider"
import { CheckoutStyled, CheckoutTitle } from "./Checkout.styled"
import CheckoutProduct from "../checkoutProduct/CheckoutProduct"
import SubTotal from "../subTotal/SubTotal"

const Checkout = () => {
  const [{ basket }] = useStateValue()

  return (
    <CheckoutStyled>
      <div>
        {/* Banner image */}
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon"
        />

        {basket?.length === 0 ? (
          <div>
            <CheckoutTitle>
              Your Shopping basket is empty
            </CheckoutTitle>
            <p>You have no item in ypur basket. To buy one or more items, click 'Add to basket' nex to the item.</p>
          </div>
        ): (
          <div>
            <CheckoutTitle>
              Your Sopping basket
            </CheckoutTitle>

            {/* List all of the checkout products */}
            {basket?.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div>
          <SubTotal />
        </div>
      )}
    </CheckoutStyled>
  )
}

export default Checkout
