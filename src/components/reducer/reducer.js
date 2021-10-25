// Init the state
export const initialState = {
  basket: [],
  user: null
}

// Init action type
export const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_TO_BASKET: 'REMOVE_TO_BASKET',
  EMPTY_BASKET: 'EMPTY_BASKET',
  SET_USER: 'SET_USER'
}

// Total basket
export const getBasketTotal = (basket) => (
  basket?.reduce((amount, item) => item.price + amount, 0)
)

export default function reducer(state = initialState, action) {
  console.log(action);
  // action à effectuer est d'ajouter des items au panier
  switch (action.type) {
    // Logic for adding item from basket
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item], // basket: state.basket + 1 
      }

    // Logic for removing item from basket
    case actionTypes.REMOVE_TO_BASKET:
      // Clone the basket
      let newBasket = [...state.basket]

      // Check if product exist
      let index = state.basket.findIndex(basketItem => (
        // Comparison of the 2 values ​​without conversion beforehand
        basketItem.id === action.id
      ))

      if (index >= 0) {
        // Item exist in basket, remove it
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant remove this product (id: ${action.id})`)
      }
      return {
        ...state,
        basket: newBasket
      }

    // Logic for empty basket
    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basket: []
      }

    // Logic to set user
    case actionTypes.SET_USER:
      return {
        ...state, 
        user: action.user
      }
    default:
      return state;
  }
}