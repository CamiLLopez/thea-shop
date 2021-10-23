import Alert from "react-bootstrap/Alert";
import ItemList from "../components/itemList";
import { useState } from "react";
export default function ItemListContainer(props) {
  return (
    <div>
      <div className="ItemList">
        <p>Buenos días {props.mensaje}</p>
      </div>
        <Alert variant="secondary">
        <Alert.Heading className="d-flex justify-content-center">
          Bienvenido!
        </Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia,
          suscipit eum velit cum ut hic praesentium quasi dolorem molestiae
          saepe soluta, sint magni et voluptate iusto voluptatem! Tempora,
          fugiat.
        </p>
      </Alert>
      <ItemList/>
    </div>
  );
}
