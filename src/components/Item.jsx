import React from "react";
import { Card,Button } from "react-bootstrap";
import "./item.css";
export default function Item(props) {
  let item = props.item;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          Código: {item.id}
          {item.descripcion}
        </Card.Text>
        <p>{item.precio}</p>
        <Button variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
}
