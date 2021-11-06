import { height } from 'dom-helpers';
import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import './itemDetail.css';

export const ItemDetail = (props) => {
 
    let item = props.item;
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
        <Button variant="secondary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
};
