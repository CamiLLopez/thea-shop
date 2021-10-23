import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';


function App() {


  return  <>
    <Navbar />
    <Home mensaje={'Cliente!'} />
    <ItemListContainer/>   
  </>;   
}

export default App;
