import React from "react";
import Item from "./Item";
import "./ItemList.css";
export default function ItemList() {
  const items = [
    {
      id: 1, //random(0, 1500),
      nombre: "Cardan",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 100,
      image: "../assets/cardan.png",
    },
    {
      id: 2, // random(0, 1500),
      nombre: "Disco de Freno",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 150,
      image: "../assets/discoDeFreno.png",
    },
    {
      id: 3, // random(0, 1500),
      nombre: "Embrague",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 800,
      image: "../assets/embrague.png",
    },
    {
      id: 4, // random(0, 1500),
      nombre: "Embrague",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 800,
      image: "../assets/limpiaparabrisa.png",
    },
  ];
  let itemUpdate=[];
  for (const [index, value] of items.entries()) {
    itemUpdate.push( <Item key={index} item={value} /> )
  }
  return (
    <div className="">
      {itemUpdate}
    </div>
  );
}
