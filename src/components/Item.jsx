import React from "react";
import { Card,Button } from "react-bootstrap";
import "./item.css";
export default function Item(props) {
  let item = props.itemSelected;

  return (
    <Card className="card"style={{ width: "18rem" }}>
      <Card.Img className="img-card"variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="img-title">{item.nombre}</Card.Title>
        <Card.Text className="img-text">
        Código: {item.id}
        </Card.Text>
        <Card.Text className="img-text">
          {item.descripcion}
        </Card.Text>
        <p>$ {item.precio}</p>
        <Button variant="secondary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
}
