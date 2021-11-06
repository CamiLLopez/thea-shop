import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <Nav className="App-header" activeKey="/home">
      <Nav.Item className="list-nav">
        //TODO CAMBIAR LINKS
            <Link className="Div-logo" to={`/`}>
              <img src="../assets/theaShop.jpg" alt="logo shop" className="App-logo"/>
            </Link>
            </Nav.Item>   
        <div className="list-nav-center"></div>
        <div className="list-nav">
        <Nav.Item className="list-nav">
            <Nav.Link className="App-link" href="/home">
              Quienes somos?
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="list-nav">
            <Nav.Link className="App-link" href="/productos">
              Productos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="list-nav">
            <Nav.Link className="App-link" href="#">
              Tiendas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="list-nav">
            <Nav.Link className="App-link" href="#">
              Contacto
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="list-nav">
            <Nav.Link className="App-link" href="/home">
            <CartWidget/>
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}
