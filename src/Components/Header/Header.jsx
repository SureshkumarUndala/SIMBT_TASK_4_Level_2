import React from 'react'
import './Header.css'
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { BsCart4 } from "react-icons/bs"
import { IoStorefrontOutline } from "react-icons/"
import { useNavigate } from 'react-router'

const Header = () => {
  const Navigate = useNavigate()


    return (
        <div className='header'>
          <div className='icon' >
          <SiHomeassistantcommunitystore style={{fontSize:"30px"}}/>
          </div>
          <div style={{flexGrow:1}}>
          <h5>My Store</h5>  
          </div>
          <div style={{flexGrow:1, }}> 
            <input />
            <button >Search</button>
          </div>
          <div> 
          <BsCart4  style={{fontSize:"30px"}} onClick={()=>Navigate("/cart")}/>
          </div>

        </div>
    )
}

export default Header