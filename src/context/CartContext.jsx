import React, {useState} from "react";
import AlertDismissible from "../components/Alert";

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, unidades) =>{
        const itemExiste=cart.find(item=>item.id===item.id)
        if(!itemExiste && unidades!==0){
            setCart([...cart, {id:item.id, nombre: item.name, precio: item.price, cantidad: unidades, subtotal: (item.price*unidades)}])
            setTotal(total+(item.price*unidades))
            setUnidades(unidades+1)
        } 
        else if(unidades==0){
           alert("No se pueden seleecionar menos de 0 unidades!");
        }else {
            const cartAux=cart.map((item)=>{
                if(item.id===item.id){
                    item.cantidad+=unidades
                    item.subtotal+=(item.price*unidades)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(item.price*unidades))
        }
    } 
   const deleteItem = (item) => {
        const itemExiste=cart.find(item=>item.id===item.id)
        if(itemExiste){
            let cartFiltered = cart.filter((e)=> e.id != item.id);
            setCart([cartFiltered])
            setTotal(total+(item.price * (unidades - itemExiste.cantidad)))
            setUnidades(unidades-itemExiste.cantidad)
        } 
    }
    
    return <Context.Provider value={{cart, total, addItem, deleteItem}}>
        {children}
    </Context.Provider>

}

export {CartFuncion, Context }