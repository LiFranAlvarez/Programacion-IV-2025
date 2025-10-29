import '../styles/pedido.css'
import { useEffect } from "react"
import { Product as ProductType} from "../interface/producto.interface";
type PedidoProps ={
    pedido : ProductType[]
}
export const Pedido = ({pedido} : PedidoProps) => {
    useEffect(() =>{}, [pedido])
    return (
        <div className="pedido-conteinter">
            <ul>
                {
                    // CORRECCIÓN 2: Usamos ( ) en el map para el return
                    pedido.map((item: ProductType) => (
                        <li key={item.id}>{item.name} - {item.price}</li>
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