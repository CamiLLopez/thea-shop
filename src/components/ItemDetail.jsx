import React,{useState, useContext}  from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import './itemDetail.css';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../context/CartContext";


export const ItemDetail = (props) => {
  
      let item = props.item;
      const [buy, setBuy] = useState(false)
      const {addItem} = useContext(Context)
  
      const agregar = (props)=>{
          setBuy(!buy)
          console.log(props.item);
          addItem(props.item, props.unidades)
          alert(`Agregaste  ${props.unidades} elemento al carrito`);
      }

    return !item ? (
    <Alert variant="warning">
      <Alert.Heading>Hey, el articulo que estas buscando no existe! Por favor intenta nuevamente.</Alert.Heading>
    </Alert>
  ) : (
    <>
    <div className="container">
    <Card className="card-details"style={{ width: "40%", height: "5%" }}>
      <Card.Img className="img" src={item.image} />
      <Card.Body>
        <Card.Title className="img-title">{item.name}</Card.Title>
        <Card.Text className="img-text">
          {item.description}
        </Card.Text>
        <strong><p>$ {item.price}</p></strong>
        {!buy ? <ItemCount addItem={agregar} item={item} /> : <div> <Link to='/cart'><Button variant="secondary">Finalizar Compra</Button></Link> <Link to='/'><Button variant="secondary">Seguir comprando</Button></Link></div>}
      </Card.Body>
    </Card>
    
    </div>
    </>
  );

};