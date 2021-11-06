import React from "react";
import Item from './Item';
import "./ItemList.css";


export default function ItemList(props) {

    let itemList = props.itemSelected;
  
    return (

      <div className="card-Items">
      {itemList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
    );
  }

