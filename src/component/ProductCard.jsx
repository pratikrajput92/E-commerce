import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({product}) {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="flex flex-col justify-between bg-violet-100 shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 h-[480px]" >
      <img className="h-55 w-55 mb-4" src={product.image} alt={product.title}  />
        <h3 className="text-lg w-55 font-semibold mb-2  line-clamp-2 ">{product.title}</h3>
        <p className="text-indigo-600  text-lg font-semibold mb-2">${product.price}</p>
        <p className="text-gray-600 w-55 text-sm mb-2 line-clamp-3">{product.description}</p>
        <button className="w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-600 hover:rounded-4xl  transition-colors">Add to Cart</button>
    </div>
  )
}

export default ProductCard