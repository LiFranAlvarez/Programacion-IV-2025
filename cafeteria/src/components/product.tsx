import '../styles/product.css';
type onAgregarCallBack = ( producto : {id: string, name: string, price: number}) => void;

type ProductProps ={
    id : string,
    name : string,
    price : number,
    onAgregar : onAgregarCallBack;
}
const Product = ({id, name, price, onAgregar}: ProductProps ) => {
    const handleClickAgregar = ()=>{
        onAgregar({id, name, price})
    }
        return(
            <div className="product">
                <div className="foto"></div>
                <p>{name}</p>
                <p>${price}</p>
                <button onClick={handleClickAgregar}>Agregar</button> 
            </div>
        )
}
export default Product;