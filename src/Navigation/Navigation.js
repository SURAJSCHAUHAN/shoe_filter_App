import React, { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import './Navigation.css'
const Navigation = ({filterItem,setProductData,productlist}) => {

  const [search,setSearch]=useState("");

  const handleChange=(e)=>{
    setSearch(e.target.value)

    const result=productlist.filter((curntElem)=>{
      if(curntElem.company.toLowerCase().includes(search.toLowerCase())){
        return curntElem;
      }
    })
    setProductData(result);
  }

  return (
    <>
        <nav>
            <div className='nav-container'>
                <input type="text" className='search-input' placeholder='Enter Products to Search' onChange={handleChange}/>
            </div>
            <div className='profile-container'>
                <a href="#"> <FiHeart className='nav-icons'/> </a>
                <a href="#"> <AiOutlineShoppingCart className='nav-icons'/> </a>
                <a href="#"> <AiOutlineUserAdd className='nav-icons'/> </a>

            </div>
        </nav>
    </>
  )
}

export default Navigation
