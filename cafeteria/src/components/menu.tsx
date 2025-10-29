import '../styles/menu.css'
import { useState, useEffect } from "react";
import { Product as ProductType} from "../interface/producto.interface";
import Product from "./product";
import { Pedido } from './pedido';

export function Menu() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [ order, setOrder] = useState<ProductType[]>([]);

    useEffect(() => {
        console.log('Adentro del effect');
        const fetchProducts = async() =>{
            try {
                console.log('adentro de fetchProd');
                const response = await fetch('api/menu');
                if (!response.ok) {
                        console.log('no cargaron paciente');
                        throw new Error("Error no cargaron los productos");
                }
                const data = await response.json()
                setProducts(data);
            } catch (error) {
                console.error(error);
                console.log('No renderizo Menu: ' + error);
            }
        }
        fetchProducts();
    }, []);
    const handleProduct = (productoAgregar : ProductType) => {
            setOrder((estadoAnterior) => {
                return [...estadoAnterior, productoAgregar]
            })
        };
    return(
        <div className="menu">
            <div className="productos">
                    <ul>{
                    products.map(
                        data =>{
                            return <li key={data.id}><Product 
                                {...data}
                                onAgregar={handleProduct}
                                /></li>
                        }
                    )
            }   </ul>
            </div>
            <div className="pedidos">
                <Pedido pedido={order} />
            </div>
        </div>
    )
} 