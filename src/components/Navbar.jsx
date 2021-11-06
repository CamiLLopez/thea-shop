import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import ItemDetailContainer from "../container/ItemDetailContainer";

export default function Navbar() {
  return (
    <>
      <Nav className="App-header" activeKey="/home">
        <Nav.Item className="list-nav">
          <Link className="Div-logo" path={`/`}>
            <img
              src="../assets/theaShop.jpg"
              alt="logo shop"
              className="App-logo"
            />
          </Link>
        </Nav.Item>
        <div className="list-nav-center"></div>
        <div className="list-nav">
          <Nav.Item className="list-nav">
            <Link className="App-link" to={`/`}>
              Todos los productos
            </Link>
          </Nav.Item>
          <Nav.Item className="list-nav">
            <Link className="App-link" to={`/category/`}>
              Repuestos
            </Link>
          </Nav.Item>
          <Nav.Item className="list-nav">
            <Link className="App-link" to={`/category/`}>
              Accesorios
            </Link>
          </Nav.Item>
          <Nav.Item className="list-nav">
            <Link className="App-link" to={`/category/`}>
              Embragues
            </Link>
          </Nav.Item>
          <Nav.Item className="list-nav">
            <Link className="App-link" to="/cart">
              <CartWidget />
            </Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}
