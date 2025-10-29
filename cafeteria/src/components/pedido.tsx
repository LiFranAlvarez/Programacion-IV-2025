import '../styles/pedido.css'
import { useEffect } from "react"
import { Product as ProductType} from "../interface/producto.interface";
type CallBackEliminar = (id : string)=> void;
type PedidoProps = {
    pedido : ProductType[],
    onEliminar  : CallBackEliminar   
    }
export const Pedido = ({pedido, onEliminar }: PedidoProps,) => {
    useEffect(() =>{}, [pedido]);
    const handleClickEliminar = (id: string ) => {
        onEliminar(id);
    }
    return (
        <div className="pedido-conteinter">
            <ul>
                {
                    pedido.map((item: ProductType) => (
                        <li key={item.id}>
                            {item.name} - {item.price} 
                            <button onClick={(e) =>{
                                e.stopPropagation();
                                handleClickEliminar(item.id)}}>Eliminar</button>
                            </li>
                    ))
                }
            </ul>
            <div className="total">
                total: ${pedido.reduce((acumulador, item)=>{
                        acumulador += item.price;
                        return acumulador;
                }, 0)}
            </div>
        </div>
    )
}