import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

export const ItemDetail = (props) => {
 
    let item = props.item;
    return !item ? (
    <Alert variant="warning">
      <Alert.Heading>Hey, el articulo que estas buscando no existe! Por favor intenta nuevamente.</Alert.Heading>
    </Alert>
  ) : (
    <>
    <div>
    <Card className="card"style={{ width: "50%" }}>
      <Card.Img className="img-card"variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="img-title">{item.name}</Card.Title>
        <Card.Text className="img-text">
          {item.description}
        </Card.Text>
        <p>$ {item.price}</p>
        <Button variant="secondary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
};
