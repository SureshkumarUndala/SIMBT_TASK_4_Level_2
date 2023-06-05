import React from 'react'
import "./SideNav.css"

//here categeries taken from Homepage and render
//we calling onClickHandler by passing category item as argument

const SideNav = ({categories,onClickHandler}) => {
  
  return (
    
    <div className='Nav'>
      <div className="items" >
       {categories.map((catItem, id )=>{
    
          return(
            <li key={id} onClick={()=>onClickHandler(catItem) 
  
            } >{catItem}</li>
          )
         
        }
       )
      }
        </div>
      </div>

        
       
         
        
  )
    }


export default SideNav