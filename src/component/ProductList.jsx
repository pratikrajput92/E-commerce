
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';


function ProductList({category}) {
 
   const [product, setProduct] = useState([]);
   const navigate = useNavigate();

  useEffect(() =>{
      
    const fetch = async()=>{

      try {
        let url = "https://fakestoreapi.com/products";

        if(category){
          url = `https://fakestoreapi.com/products/category/${category}`
        }
        const response = await axios.get(url);
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error",error);
      }

    }
    navigate();
    fetch();
  },[category]);


  return (
     <div className="w-full h-150 p-4 grid grid-cols-4 sm:grid-cols-4 gap-6 mt-8 ">
      {product.map((item) => (
        <ProductCard key={item.id} product={item}/>
          ))}
     </div>
  
  )
}

export default ProductList