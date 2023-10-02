import { useState } from "react";

import productlist from './db/data';
import Home from "./pages/Home";

function App() {

  const [productData,setProductData]=useState(productlist);
  const filterItem=(recommend)=>{
    if(recommend==="All"){
      setProductData(productlist);
    }else{
        const updateList= productlist.filter((curntElem)=>{
          return curntElem.company===recommend;
        });
        setProductData(updateList);
    }
  }

  return (
    <>
     <Home/>
    </>
  );
}

export default App;                       
