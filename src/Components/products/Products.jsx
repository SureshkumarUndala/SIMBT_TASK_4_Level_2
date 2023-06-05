import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./products.css"
import { CartContext } from '../../context/CartContext'






const Products = ({ Prod }) => {

   const cartContext = useContext(CartContext)

   const {addproduct} = cartContext

    

    
    return (
        <div className='products' style={{ width:"85%", backgroundColor:"whitesmoke",  boxSizing:"border-box", padding:"10px 20px", display:"flex",justifyContent:"space-evenly",flexWrap:"wrap", alignItems:"center",}}>
            {Prod && Prod.map((product, index) => {
              if(index < 4){
                return (
                    <div  key={index} style={{width:"250px",height:"400px", boxShadow:"0.5px 1px 5px rgba(0,0,0,0.5)", backgroundColor:"white", borderRadius:"6px", border:"1px solid lightgrey"}} >
                        <Link to={`/products/${product.id}`}><p>{product.title}</p></Link>
                         <div className='product_title_image' >
             
                             <img src={product.images[index]} />
                         </div>
 
                         <div className="product_action" >
                             <button onClick={()=>addproduct(product)} >Add To Cart</button>
                             <Link to="/Basket">    <button >Add To Basket</button></Link>
 
                           
 
                         </div>
                    </div>
                     
 
 
                 )
              }
            
            })}
        </div>

    )
}

export default Products



// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./products.css"
// const Products = ({ Prod }) => {
//     return (
//         <div className='products' style={{border:"1px solid black", width:"85%",boxSizing:"border-box" ,padding:"10px 60px", display:"flex", justifyContent:"space-between"}}>
//             {Prod && Prod.map((product, index) => {
//                 return (
//                    <div  key={index} style={{maxWidth:"calc(100% / 6)", boxShadow:"0.5px 1px 5px black"}} >
//                        <div style={{ display: "flex", flexDirection: "column", gap:"3px",border: "1px solid black", maxWidth: "1000px",padding:"20px"}}>
//                        <Link to={`/products/${product.id}`}><h5>{product.title}</h5></Link>
//                         <div className='product_title_image' style={{maxHeight:"300px", maxWidth:"200px"}} >
            
//                             <img src={product.images[index]} />
//                         </div>

//                         <div className="product_info">
//                             <h6>Ratings {product.rating} </h6>
//                             <h6>price {product.price} Dollars</h6>

//                         </div>
//                         <div className='product_info_stock'>
//                             <label>stock level {product.stock}</label>
//                             <label>Free Delivery</label>
                          

//                         </div>
//                         <div className="product_action" >
//                             <Link to={`/products/${product.id}`}>      <button >Add To Cart</button></Link>
//                             <Link to="/Basket">    <button >Add To Basket</button></Link>
                         
                     
                       

                          

//                         </div>

//                     </div>
//                    </div>
                    


//                 )
//             })}
//         </div>

//     )
// }

// export default Products