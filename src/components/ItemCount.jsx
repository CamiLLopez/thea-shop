import React, {useState} from "react";
import {Button} from "react-bootstrap";
import './ItemCount.css'; 

const ItemCount = (props) =>{

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock={
        sumaStock:()=>{
            if(stock===0){
                alert('no hay mas stock')
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(unidades===0){
                alert('no podes seleccionar menos de 0')
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }

    return<>
        <div className='ItemCount'>
            <div className='button-ItemCount'>
                <button onClick={handleStock.restaStock} >-</button>
                <p>{unidades}</p>
                <button onClick={handleStock.sumaStock} >+</button>
            </div>
            <div>
                <p>Stock disponible {stock}</p>
            </div>
            <div>
            <Button variant="secondary" onClick={()=>props.onAdd({unidades})}>Añadir al carrito </Button>
            </div>
        </div>
    </>
}
export default ItemCount