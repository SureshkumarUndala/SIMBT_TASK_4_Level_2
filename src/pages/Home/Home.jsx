import React, { useEffect, useState } from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import SideNav from '../../Components/sidenav/SideNav'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/products/Products'




const Home = () => {


  const [categories,setCategories] = useState([])
  const [Prod,setProd] = useState([])  
 
    

  useEffect(()=>{
    fetch("https://dummyjson.com/products/categories")
    .then((res)=>res.json()).then(data=>setCategories(data))
    .catch(err=>console.log(err))
    
  },[])

  //category item taken from sideNav Compoonent and fetching the products w.r.t catogeries
  const ClickHandler = (cat)=>{
    fetch(`https://dummyjson.com/products/category/${cat}`,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    })
    .then((data)=>data.json()).then(data=>setProd(data.products))}

    
  return (
    <div className="parent">
        <Header/>
        <div className='main' >
        <SideNav categories={categories} onClickHandler={ClickHandler}/>
        <Products Prod={Prod}  />
   
        </div>
       
        <Footer/>
    </div>
  )
}

export default Home