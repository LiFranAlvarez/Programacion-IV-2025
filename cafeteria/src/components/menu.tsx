import '../styles/menu.css'
import { useState, useEffect } from "react";
import { Product as ProductType} from "../interface/producto.interface";
import Product from "./product";

export function Menu() {
    const [products, setProducts] = useState<ProductType[]>([]);
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
        fetchProducts()
    }, []);
    
    return(
        <div className="menu">
                <ul>{
                    products.map(
                        data =>{
                            return <li key={data.id}><Product {...data}/></li>
                        }
                    )
            }   </ul>
        </div>
    )
} 