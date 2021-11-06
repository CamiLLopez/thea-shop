import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
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
      </Route>
      <Route exact path="/productos">
        <ItemListContainer/>   
      </Route>
    </Switch>
  </BrowserRouter>
  </>;   
}

export default App;
