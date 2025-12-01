import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetails({addCart}) {
    
  const { id } = useParams();
  const [samaan, setSamaan] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
     const fetch = async()=>{
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setSamaan(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error",error);
        
      }
     };
     fetch(); 
    },[id]);

    const handleAddToCart = () => {
      const token = localStorage.getItem("token");
      if(!token){
        navigate("/login");
        return;
      }

      addCart(samaan);
    }


  return (
    <div className="max-w-5xl h-[75vh] mx-auto p-6 items-center mt-10 bg-violet-100  rounded-lg shadow-lg flex gap-8">
      <img src={samaan.image} alt={samaan.title} className="w-80 h-80 object-contain" />
      <div>
        <h2 className="text-2xl font-bold mb-3">{samaan.title}</h2>
        <p className="text-gray-700 mb-3">{samaan.description}</p>
        <p className="text-indigo-600 text-xl font-semibold mb-4">${samaan.price}</p>
        <button onClick={handleAddToCart} className="bg-indigo-700 text-white px-6 py-2 rounded-lg hover:rounded-4xl hover:bg-indigo-600">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails