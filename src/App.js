import { 
  BrowserRouter as
  Router, 
  Route, 
  Switch 
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h1>Checkout page</h1>
          </Route>
          
          <Route path='/login'>
            <h1>Login page</h1>
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
