import React from "react";
import "./CartWidget.css"
import { Link } from "react-router-dom";


export default function CartWidget(){
    return<>
        <div className="div-carrito" >
            <Link to={`/compras`}><img  className="logo-carrito" src="../assets/carrito.png" alt="logo carrito"  /></Link>
        </div>
        </>
}