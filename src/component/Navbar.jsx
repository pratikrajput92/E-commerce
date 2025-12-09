

import { Key, Search, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar({cart}) { 

  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
   
  const baseClass = "text-lg px-2 rounded-lg font-semibold cursor-pointer";
  const activeClass = "bg-orange-500 text-white hover:bg-orange-600 hover:rounded-4xl";
  const inactiveClass = "hover:bg-neutral-100";

  return (
    <>
      <nav>
        <div className='w-full bg-orange-200 flex justify-around px-3 items-center'>
          <div className='flex w-lg'>
           <img className='h-10 ' src="https://github.com/dilshad-ahmed/shopsy/blob/main/src/assets/logo.png?raw=true" alt="image" />
            <h1 className='p-2 font-semibold text-lg'>E-Commerce</h1>
          </div>
          <div className='w-lg flex gap-2 justify-end items-center'>
            <div className='flex items-center relative'>
              <input className='p-1 px-2 bg-white rounded-2xl border-1 border-gray-300' type="text" placeholder='Search ' />
              <button className='absolute right-0 p-2 cursor-pointer'><Search size={15}/></button>
            </div>
            <Link to={"/cart"} className='bg-amber-500 relative text-white rounded-xl px-2 p-0.5 cursor-pointer'><ShoppingCart/>
            <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>{cart.reduce((acc, item) => acc + (item.qty || 0), 0)}</span>
            </Link>
            {!token ? (
              <button onClick={() => navigate("/login")} className='bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700'>Login</button>
            ) : (
              <button onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }} className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700">Logout</button>
            )}
          </div>
        </div>
        

        <div className='w-full shadow-xs  shadow-gray-800 bg-white flex justify-center space-x-40 items-center p-2 '>
          <Link to={"/"} className={`${baseClass} ${location.pathname === "/" ? activeClass : inactiveClass} `}>Home</Link>
          <Link to={"/men"}  className={`${baseClass} ${location.pathname === "/men" ? activeClass : inactiveClass} `}>Men's Wear</Link>
          <Link to={"/women"}  className={`${baseClass} ${location.pathname === "/women" ? activeClass : inactiveClass} `}>Women's wear</Link>
          <Link to={"/accessories"}  className={`${baseClass} ${location.pathname === "/accessories" ? activeClass : inactiveClass} `}>Accessories</Link>
          <Link to={"/electronic"} className={`${baseClass} ${location.pathname === "/electronic" ? activeClass : inactiveClass} `}>Electronics</Link>

        </div>
      
      {/* <div className='flex items-center gap-8 ml-10 '>
        <div >
        <button className='p-1.5 flex items-center font-semibold rounded-lg bg-amber-300'>Cart<ShoppingCart  /></button>
      </div>
       <div >
         <button className='p-1.5 pl-2.5 w-15 flex items-center font-semibold rounded-lg bg-orange-400'>Login</button>      
       </div>
      </div>  */}
      </nav>

    </>

  )
}

export default Navbar