import React, { useEffect, useState } from "react";
import "../components/ItemList.css";
import ItemList from "../components/ItemList";

export default function ItemListContainer() {
  
  const ITEMS = [
    {
      id: 1,
      nombre: "Cardan",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 100,
      image: "../assets/cardan.jpg",
    },
    {
      id: 2,
      nombre: "Semieje",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 150,
      image: "../assets/semieje.jpg",
    },
    {
      id: 3,
      nombre: "Embrague",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 800,
      image: "../assets/embrague.jpg",
    },
    {
      id: 4,
      nombre: "Limpia Parabrisas",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 800,
      image: "../assets/limpiaparabrisas.jpg",
    },
    {
      id: 5,
      nombre: "Arbol de levas",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 3000,
      image: "../assets/arboldelevas.jpg",
    },
    {
      id: 6,
      nombre: "Bomba de Agua",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 2000,
      image: "../assets/bombadeagua.jpg",
    },
    {
      id: 7,
      nombre: "Rulemanes",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
      precio: 900,
      image: "../assets/rulemanes.jpg",
    },
  ];

  const [item, setItems] = useState([ITEMS]);
  useEffect(() => {
    let promise = new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(ITEMS);
      }, 2000)
    );

    promise.then(
      (result) => {
        setItems(result);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [item]);

  if (item.length === 1) {
    return (
        <div className="snipper">
        <button className="btn btn-dark text-nowrap" type="button">
            <span className="spinner-border spinner-border-sm mr-10"></span>
            Buscando productos...
        </button>
        </div>
    )}

  return (
    <ItemList itemSelected={item}/>
  );
}
