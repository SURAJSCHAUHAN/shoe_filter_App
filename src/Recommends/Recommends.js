import React, { useState } from 'react'
import './Recommends.css'
const Recommends = ({filterItem,setProductData,productlist}) => {

  const uniqueList=[
    ...new Set(
      productlist.map((curntElem)=>{
        return curntElem.company;
      })
    ),"All"
  ];

  const [recommendList,setRecommendList]=useState(uniqueList);

  return (
    <>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          {recommendList.map((curntElem)=>{
            return(
              <button className='btns' onClick={()=>filterItem(curntElem) }>
                {curntElem}
              </button>
            );
          })}
        </div>
    </>
  )
}

export default Recommends;
