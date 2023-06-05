import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {

  const [products, setproducts] = useState([])
  const {productid}= useParams() // accessing productid (route patrameter) from the url  


  
 useEffect( ()=>{
   fetch(`https://dummyjson.com/products/${productid}`)  // fetch product details by id and store it in the products state
   .then((data)=> data.json()).then((data)=>setproducts(data))
   


 },[productid])

 console.log(products)
 


  
  return (
    <div>
      <h1>{products.title}</h1>


    </div>
  )
}

export default ProductDetails