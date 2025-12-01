
import Navbar from './component/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Mens from './Pages/Mens';
import Womans from './Pages/Womans';
import Homepage from './Pages/Homepage';
import Accessories from './Pages/Accessories';
import Electronic from './Pages/Electronic';
import Login from './Pages/Login';

import ProductDetails from './component/ProductDetails';
import { useEffect, useState } from 'react';
import CartPage from './Pages/CartPage';
function App() {
   
  const [cart,setCart] = useState(() =>{
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
   
  useEffect(() =>{
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]) 
  
  const addCart = (product) => {
    const exist = cart.find(item => item.id === product.id);
    if(exist){
      setCart(cart.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item));
    } else{
      setCart([...cart, {...product, qty:1}]);
    }
  }

  const remove = (id) =>{
    setCart(cart.filter(item  => item.id !== id ));
  }

  const UpdateQty = (id, type) => {
     setCart(cart.map(item => {
      if(item.id === id){
        if(type === "inc"){
          return {...item, qty: item.qty + 1};
        } else if(type === "dec"){
          if(item.qty === 1){
            remove(id);
            return null;
          } else{
            return {...item, qty: item.qty -1};
          }
        }
      }
     }).filter(item => item !== null)
    );
  }

  return (
   <>
    <Navbar cart={cart}/>
    <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='accessories' element={<Accessories/>}/>
       <Route path='men' element={<Mens/>}/>
       <Route path='women' element={<Womans/>}/>
       <Route path='electronic' element={<Electronic/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='product/:id' element={<ProductDetails addCart={addCart}/>}/>
       <Route path='cart' element={<CartPage cart={cart} remove={remove} UpdateQty={UpdateQty}/>}/>
    </Routes>
   </>
  )
}

export default App
