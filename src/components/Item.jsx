import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item.css";

export default function Item(props) {
  
  let item = props.item;

  return (
    <Card className="card"style={{ width: "18rem" }}>
      <Card.Img className="img-card"variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="img-title">{item.name}</Card.Title>
        <Card.Text className="img-text">
        Código: {item.id}
        </Card.Text>
        <Card.Text className="img-text">
          {item.description}
        </Card.Text>
        <p>${item.price}</p>
        <Button variant="secondary" href={`/item/${item.id}`}> Ver detalles</Button>
      </Card.Body>
    </Card>
  );
}
