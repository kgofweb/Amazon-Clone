import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Payment from "./components/payment/Payment";
import Orders from './components/orders/Orders'

import { 
  BrowserRouter as
  Router, 
  Route, 
  Switch 
} from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./components/firebase/firebase";
import { actionTypes } from "./components/reducer/reducer";
import { useStateValue } from "./components/stateProvider/StateProvider";

// Stripe for payment system
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51Jn788DCsK0UZi0XnuJKWlj2D2TTCE2uaQJo8PrPvkDPGTuDiWA6KJQTWlpYck7GE2IyXcd36mVjpLIuOpafRnzv00OCI2xSCV')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // Ne s'exécutera qu'une seule fois lorsque le composant de l'application sera chargé
    
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        // User just logged in / User was logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })
      } else {
        // User is logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;