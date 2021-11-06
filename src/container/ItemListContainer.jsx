import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

export const items = [
  {
    id: 1,
    name: "Cardan",
    category: "respuestos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
    price: 100,
    image: "../assets/cardan.jpg",
  },
  {
    id: 2,
    name: "Semieje",
    category: "repuestos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
    price: 150,
    image: "../assets/semieje.jpg",
  },
  {
    id: 3,
    name: "Embrague",
    category: "embragues",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
    price: 800,
    image: "../assets/embrague.jpg",
  },
  {
    id: 4,
    name: "Limpia Parabrisas",
    category: "accesorios",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
    price: 800,
    image: "../assets/limpiaparabrisas.jpg",
  },
  {
    id: 5,
    name: "Arbol de levas",
    category: "repuestos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
    price: 3000,
    image: "../assets/arboldelevas.jpg",
  },
  {
    id: 6,
    name: "Bomba de Agua",
    category: "repuestos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
    price: 2000,
    image: "../assets/bombadeagua.jpg",
  },
  {
    id: 7,
    name: "Rulemanes",
    category: "repuestos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium nulla ipsum reiciendis provident amet beatae distinctio animi",
    price: 900,
    image: "../assets/rulemanes.jpg",
  },
];
export default function ItemListContainer() {

  const [item, setItems] = useState([items]);
  const [loader, setLoader] = useState(true);
  const { catId } = useParams();


  useEffect(() => {
    setLoader(true);
    const getItems = new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(items);
      }, 2000)
    );

    getItems.then(
      (result) => {
        catId ? setItems(result.filter((i) => i.category == catId)): setItems(result);
      },
      (err) => {
        console.log(err);
      }
    );
    getItems.finally(() => setLoader(false));
  }, [catId]);

  return loader ? (
    <div className="snipper">
      <button className="btn btn-dark text-nowrap" type="button">
        <span className="spinner-border spinner-border-sm mr-10"></span>
        Buscando productos...
      </button>
    </div>
  ) : (
    <ItemList itemSelected={item}/>
  );

}