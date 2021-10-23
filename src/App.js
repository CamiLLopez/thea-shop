import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return  <>
    <Navbar />
    <ItemListContainer mensaje={'Cliente!'} />
    
  </>;   
}

export default App;
