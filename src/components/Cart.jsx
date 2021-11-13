import React, { useContext } from "react";
import { Context } from "../context/CartContext";
import { Card, Button, Alert } from "react-bootstrap";


const Cart = () => {
  const { cart, total, deleteItem } = useContext(Context);

  return cart.length<1 ? (
    <Alert variant="warning">
      <Alert.Heading>Nada por aqui...</Alert.Heading>
    </Alert>
  ) : (
      <div>
        <p>El total de su carrito es de {total} </p> 
        {cart.map((item) => (
            <div key={item.id}>
            <Card className="card"style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title className="img-title">{item.nombre} </Card.Title>
                    <p>$ {item.precio} </p>
                    <h2>Cantidad: {item.cantidad}</h2>
                    <h2>Subtotal: $ {item.subtotal}</h2>
                    <Button variant="secondary" onClick={()=>deleteItem(item.id)}> Eliminar item</Button>
                </Card.Body>
                </Card>          
          </div>
        ))}
      </div>
  );
};

export default Cart;
