import React, {useContext} from "react";
import { Context } from "../context/CartContext";

const Cart = ()=>{
    const {cart, unidades, total} = useContext(Context)

    return<>
        <div>
        <p>El total de su carrito es de {total} con {unidades} unidades</p>
        {cart.map((item)=>
            <div key={item.id}>
                <h2>nombre:{item.nombre}</h2>
                <h2>precio:{item.precio}</h2>
                <h2>cantidad:{item.cantidad}</h2>
                <h2>subtotal:{item.subtotal}</h2>
            </div>
            )}
    </div>
        </>
}

export default Cart