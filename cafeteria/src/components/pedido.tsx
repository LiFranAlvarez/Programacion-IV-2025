import { useEffect } from "react"
import { Product as ProductType} from "../interface/producto.interface";
type CallBackEliminar = (id : string)=> void;
type CallBackEnviarPedido = () => void;
interface PedidoProps  {
    pedido : ProductType[],
    onEliminar  : CallBackEliminar,
    onEnviarPedido : CallBackEnviarPedido;
    }
    export const Pedido = ({pedido, onEliminar, onEnviarPedido }: PedidoProps,) => {
        useEffect(() =>{}, [pedido]);
        const handleClickEliminar = (id: string ) => {
            onEliminar(id);
        }
        const handleEnviarPedido = () =>{
            onEnviarPedido();
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
                <button onClick={handleEnviarPedido}>Enviar Pedido</button>
                total: ${pedido.reduce((acumulador, item)=>{
                        acumulador += item.price;
                        return acumulador;
                }, 0)}
            </div>
        </div>
    )
}