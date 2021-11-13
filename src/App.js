import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import { ItemDetailContainer } from './container/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import {CartFuncion} from './context/CartContext'
import Cart from './components/Cart';

function App() {


  return  <>
  <BrowserRouter>
  <CartFuncion>
  <Navbar />
    <Switch>
      <Route exact path="/">
        <Home mensaje={'Cliente!'} />
        <ItemListContainer/>
        </Route>
      <Route path="/item/:id" component={ItemDetailContainer} />
      <Route path="/category/:catId" component={ItemListContainer}>
      </Route>
    </Switch>
    </CartFuncion>
  </BrowserRouter>
  </>;   
}

export default App;
