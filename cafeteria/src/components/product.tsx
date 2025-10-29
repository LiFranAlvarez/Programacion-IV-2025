import '../styles/product.css';
type ProductProps ={
    id : string,
    name : string,
    price : number
}
const Product = ({ name, price }: ProductProps) => {
    return(
        <div className="product">
            <div className="foto"></div>
            <p>{name}</p>
            <p>${price}</p>
            <button>Agregar</button> 
        </div>
    )
}
export default Product;