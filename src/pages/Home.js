import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";
import Recommends from "../Recommends/Recommends";
import productlist from '../db/data';
// import Catagory from "./Sidebar/Catagory/Catagory";
function Home() {

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
     {/* <Sidebar handleRadio={handleRadio}/> */}
     <Navigation filterItem={filterItem} setProductData={setProductData} productlist={productlist}/>
     <Recommends filterItem={filterItem} setProductData={setProductData} productlist={productlist}/>
     <Products productlist={productData}/>
    </>
  );
}

export default Home;                       
