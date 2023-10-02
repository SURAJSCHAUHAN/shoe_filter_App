import React from 'react'
import '../Products/Products.css'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'
const Card = ({productlist}) => {
  return (
    <div className='card-container'>
      {productlist.map((curntElem)=>{
        return(
            <div className='card' key={Math.random()}>
              <img className='card-img' src={curntElem.img} alt="Shoes" />
              <div className='card-details'>
                <h3 className='card-title'>{curntElem.title}</h3>
                <div className='card-reviews'> 
                  <AiFillStar className='rating-star'/> 
                  <AiFillStar className='rating-star'/> 
                  <AiFillStar className='rating-star'/> 
                  <span className='total-reviews'>{curntElem.reviews}</span>
                </div>
                <div className='card-price'>
                  <div className='price'>
                    <del>{curntElem.prevPrice}</del> ${curntElem.newPrice}
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className='bag-icon'/>
                  </div>
                </div>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default Card
