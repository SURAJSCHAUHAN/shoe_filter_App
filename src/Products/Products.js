import React from 'react'
import './Products.css'
import Card from '../components/Card'
const Products = ({productlist}) => {
  return (
    <div>
      <Card productlist={productlist}/>
    </div>
  )
}

export default Products
