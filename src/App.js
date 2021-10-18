import { 
  BrowserRouter as
  Router, 
  Route, 
  Switch 
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";

import { useEffect } from "react";
import { auth } from "./components/firebase/firebase";
import { actionTypes } from "./components/reducer/reducer";
import { useStateValue } from "./components/stateProvider/StateProvider";

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
      <div>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
