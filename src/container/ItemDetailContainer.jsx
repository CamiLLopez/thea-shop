import React, { useState, useEffect } from "react";
import { ItemDetail } from "../components/ItemDetail";
import { items } from "./ItemListContainer";
import { useParams } from "react-router-dom";

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
        setItem(res.find((i) => i.id == id));
      })
      .finally(() => setLoader(false));
  }, [id]);

  return loader ? (
    <div className="snipper">
      <button className="btn btn-dark text-nowrap" type="button">
        <span className="spinner-border spinner-border-sm mr-10"></span>
        Buscando productos...
      </button>
    </div>
  ) : (
    <ItemDetail item={item} />
  );
};
