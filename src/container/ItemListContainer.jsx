import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  { ItemList } from '../components/ItemList';
import { items } from '../data/data';
import SpinnerMessage from "../components/spinner";


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
        catId ? setItems(result.filter((i) => i.category === catId)): setItems(result);
      },
      (err) => {
        console.log(err);
      }
    );
    getItems.finally(() => setLoader(false));
  }, [catId]);

  return loader ? (
    <SpinnerMessage message="Buscando productos.."></SpinnerMessage>
  ) : (
    <ItemList itemSelected={item}/>
  );
}