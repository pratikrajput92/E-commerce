
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';


// function Trendy() {
 
//    const [product,setProduct] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() =>{
      
//     const fetch = async()=>{
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         console.log(response.data);
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error",error);
//       }

//     }
//     navigate();
//     fetch();
//   },[])


//   return (
//      <div className="w-full h-150 p-4 grid grid-cols-4 sm:grid-cols-4 gap-6 mt-8 ">
//       {product.map((product) => (
//         <div className="flex flex-col justify-between bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 h-[480px]" >
//         <img className="h-55 w-55 mb-4" src={product.image} alt={product.title}  />
//           <h3 className="text-lg w-55 font-semibold mb-2  line-clamp-2 ">{product.title}</h3>
//           <p className="text-indigo-600  text-lg font-semibold mb-2">${product.price}</p>
//           <p className="text-gray-600 w-55 text-sm mb-2 line-clamp-3">{product.description}</p>
//           <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 hover:rounded-4xl  transition-colors">Add to Cart</button>
//         </div>
//           ))}
//      </div>
  
//   )
// }

// export default Trendy