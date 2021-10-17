// configuration de la couche de données
// On n'en besoin pour suivre le panier
import { createContext, useContext, useReducer } from "react"

// Data Layer
export const StateContext = createContext()

// Create the Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    { children }
  </StateContext.Provider>
)

// Utiliser context à l'intérieur des composants
export const useStateValue = () => useContext(StateContext)