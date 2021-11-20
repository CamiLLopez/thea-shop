import React, { useState, useEffect } from "react";
import { ItemDetail } from "../components/ItemDetail";
import { items } from "../data/data";
import { useParams } from "react-router-dom";
import SpinnerMessage from "../components/spinner";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });

    getItems
      .then((res) => {
          console.log(id);
        setItem(res.find((i) => i.id === id));
      })
      .finally(() => setLoader(false));
  }, [id]);

  return loader ? (
    <SpinnerMessage message={"Buscando detalle de producto..."}></SpinnerMessage>
  ) : (
    <ItemDetail item={item} />
  );
};
