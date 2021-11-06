import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import { ItemDetailContainer } from './container/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';


function App() {


  return  <>
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route exact path="/">
        <Home mensaje={'Cliente!'} />
        <ItemListContainer/>
        </Route>
      <Route path="/item/:id" component={ItemDetailContainer} />
      <Route path="/category/:id" component={ItemListContainer}>
      </Route>
    </Switch>
  </BrowserRouter>
  </>;   
}

export default App;
