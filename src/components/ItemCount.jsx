import React, {useState} from "react";
import {Button} from "react-bootstrap";
import './ItemCount.css'; 


const ItemCount = (props) =>{

    let item = props.item;      
    const [stock, setStock] = useState(item.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock={
        sumaStock:()=>{
            if(stock===0){
                alert("Lo sentimos, no hay mas stock de este producto!");
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(unidades===0){
                alert("No se pueden seleecionar menos de 0 unidades!");
    
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }

    return<>
        <div className='ItemCount'>
            <div className='button-ItemCount'>
                <Button  variant="dark" onClick={handleStock.restaStock}>-</Button>
                <p>{unidades}</p>
                <Button variant="dark" onClick={handleStock.sumaStock}>+</Button>
            </div>
            <div>
                <p><strong>Stock disponible {stock}</strong></p>
            </div>
            <div>
            <Button variant="secondary" onClick={()=>props.addItem({item, unidades})}>Añadir al carrito </Button>
            </div>
        </div>
    </>
}
export default ItemCount