import React, {useState} from "react";

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, unidades) =>{
        const itemExiste=cart.find(item=>item.id===item.id)
        if(!itemExiste){
            setCart([...cart, {id:item.id, nombre: item.name, precio: item.price, cantidad: unidades, subtotal: (item.price*unidades)}])
            setTotal(total+(item.price*unidades))
            setUnidades(unidades+1)
        } else {
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
   const deleteItem = (item, unidades) => {
        const itemExiste=cart.find(item=>item.id===item.id)
        if(itemExiste){
            setCart([...cart, {id:item.id, nombre:item.name, precio:item.price, cantidad:unidades, subtotal:(item.price*unidades)}])
            setTotal(total+(item.price*unidades))
            setUnidades(unidades-1)
        } else {
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
    
    return <Context.Provider value={{cart, unidades, total, deleteItem}}>
        {children}
    </Context.Provider>

    }

export {CartFuncion, Context }