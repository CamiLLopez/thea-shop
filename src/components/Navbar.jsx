import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

export default function Navbar() {
  
  const categories = [
    { id: 'todoslosproductos', address: '/', text: 'Todos los productos' },
    { id: 'repuestos', address: '/category/repuestos', text: 'Repuestos' },
    { id: 'accesorios', address: '/category/accesorios', text: 'Accesorios' },
    { id: 'embragues', address: '/category/embragues', text: 'Embragues' },
  ]; 
  
  return (
    <>
    <Nav className="App-header" activeKey="/home"> 
          <Nav.Item className="list-nav">
              <Link className="Div-logo" to={`/`}>
                <img
                  src="../assets/theaShop.jpg"
                  alt="logo shop"
                  className="App-logo"
                />
              </Link>
              </Nav.Item> 
        <div className="list-nav-center"></div>
    {categories.map((cat) => {
        return (
          <Nav.Item className="list-nav" key={cat.id}>
            <Link className="App-link" to={cat.address} exact  activeClassName="activeClass">
            {cat.text}
            </Link>
          </Nav.Item>);})};
      <CartWidget/>     
    </Nav>    
    </>
  );
}
