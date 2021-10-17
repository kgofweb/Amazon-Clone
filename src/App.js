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

function App() {
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
