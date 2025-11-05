import { useState, useEffect } from "react";
import { Product as ProductType} from "../interface/producto.interface";
import Product from "./product";
import { Pedido } from './pedido';

export function Menu() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [ order, setOrder] = useState<ProductType[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [confirmacion, setConfirmacion] = useState<string | null>(null)

    useEffect(() => {
        console.log('Adentro del effect');
        const fetchProducts = async() =>{
            try {
                console.log('adentro de fetchProd');
                const response = await fetch('/api/menu');
                if (!response.ok) {
                        console.log('no cargaron producto');
                        throw new Error("Error no cargaron los productos");
                }
                const data = await response.json()
                setProducts(data);
            } catch (error) {
                setError(true);
                console.error(error);
            } finally {
                setCargando(false);
                }
        }
        fetchProducts();
    }, []);
    
    const handleProduct = (productoAgregar : ProductType) => {
            setOrder((estadoAnterior) => {
                return [...estadoAnterior, productoAgregar]
            })
        };
    const handleEliminar = (idEliminar : string ) => {
        setOrder((pedidoActual) => {
            const indexEliminar = order.findIndex(item => item.id === idEliminar);
            if (indexEliminar === -1) {
                console.error("No hay item para eliminar");
                return  pedidoActual;
            }
            const nuevaLista = [...pedidoActual];
            nuevaLista.splice(indexEliminar, 1);
            return nuevaLista;
        })
    }
   const handleEnviarPedido = async () => {
    const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
    })
    const data = await response.json()
    setConfirmacion(data.message)
    setOrder([])
    }

    if (cargando) {
        return <div className="cargando">Estan Cargando los productos</div>
    }
    if (error) {
        return <div className="error">Error al cargar los productos</div>
    }
    return (
        <div className="menu">
            <div className="productos">
            <ul>
                {products.map(data => (
                <li key={data.id}>
                    <Product {...data} onAgregar={handleProduct} />
                </li>
                ))}
            </ul>
            </div>

            <div className="pedidos">
            <Pedido pedido={order} onEliminar={handleEliminar} onEnviarPedido={handleEnviarPedido}/>
            </div>
            {confirmacion && (
            <div role="alert" style={{ marginTop: '1rem', color: 'green' }}>
                {confirmacion}
            </div>
            )}
        </div>
        )

} 