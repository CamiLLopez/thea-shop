import React from "react";
import "./ItemList.css";
import Item from './Item';


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

