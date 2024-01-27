import React,{useContext} from 'react'
import { CartContext } from '../utils/CartContextComponent';
import { Link } from 'react-router-dom';
const Products = () => {
    
    const {products,count,setCount,cartProducts,setCartProducts,rating}=useContext(CartContext);

 const addToCart=(id)=>{
   const newCart=products[id];
   setCartProducts((prevCartProducts)=>[...prevCartProducts,newCart]);
   summa();
 }
const summa=()=>{
    console.log(cartProducts);
}
  return (
    <div>
        <div className="container mt-5">
        <div className="row d-flex justify-content-between">
                {
                    products.map((products,id)=>(
                        <div className="col-lg-6 col-sm-12 mb-4 "key={id} >
                    <div style={{boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}} className="card h-100 p-2">
                        <img src={products.thumbnail} alt="" className="card-img-top" />
            <div className="card-body">
            <h3>{products.title} </h3>           <p> Details: <br/> 
                {products.description}</p>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>  {products.price}/-</h4>
                        <p>{rating} ({products.rating})</p>
                    
                        <p><i className="fa-solid fa-tag"></i> Discount : {products.discountPercentage} % </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
               
                <Link to='Cart'> <button className="btn btn-primary" onClick={()=>{addToCart(id)}}  >Add to Cart</button></Link>
            </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products