import React, {useState} from "react";
const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (productos, unidades) =>{
        const itemExiste=cart.find(item=>item.id===productos.id)
        if(!itemExiste && unidades!==0){
            setCart([...cart, {id:productos.id, nombre: productos.name, precio: productos.price, cantidad: unidades, subtotal: (productos.price*unidades)}])
            setTotal(total+(productos.price*unidades))
            setUnidades(unidades+1)
        } 
        else if(unidades===0){
           alert("No se pueden seleecionar menos de 0 unidades!");
        }else {
            const cartAux=cart.map((item)=>{
                if(item.id===productos.id){
                    productos.cantidad+=unidades
                    productos.subtotal+=(productos.price*unidades)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(productos.price*unidades))
        }
    } 
   const deleteItem = (productos) => {
        const itemExiste=cart.find(item=>item.id===productos.id)
        if(itemExiste){
            let cartFiltered = cart.filter((e)=> e.id !== productos.id);
            setCart([cartFiltered])
            setTotal(total+(productos.price * (unidades - itemExiste.cantidad)))
            setUnidades(unidades-itemExiste.cantidad)
        } 
    }
    
    return <Context.Provider value={{cart, total, addItem, deleteItem}}>
        {children}
    </Context.Provider>

}

export {CartFuncion, Context }