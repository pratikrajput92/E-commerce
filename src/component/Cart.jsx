import { BadgeMinus, BadgePlus, Trash } from 'lucide-react';
import React from 'react'

function Cart({cart, remove, UpdateQty}) {

  const total = cart.reduce((acc, item) => acc + item.price * item.qty,0);

  return (
    <div className='max-w-5xl mx-auto p-6 mt-10 bg-violet-200 rounded shadow-lg'>
      <h2 className='text-2xl font-bold mb-6'>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your Cart is empty</p>
      ): (
       <div className='space-y-4'>
        {cart.map(item =>(
          <div key={item.id} className='flex justify-between items-center bg-gray-100 p-4 rounded'>
          <div className='flex items-center gap-4'>
            <img src={item.image} alt={item.title} className='w-20 h-20 object-contain'/>
            <div>
              <h3 className='font-semibold'>{item.title}</h3>
              <p>${item.price} x {item.qty}</p>
              <div className='flex items-center gap-2 mt-2'>
              <div className='flex items-center gap-2 mt-2'>
                 <button onClick={() => UpdateQty(item.id, "dec")} className='px-2 py-1 bg-red-200 rounded hover:bg-gray-400'><BadgeMinus size={20} /></button>
                 <button onClick={() => UpdateQty(item.id, "inc")} className='px-2 py-1 bg-green-200 rounded hover:bg-gray-400'><BadgePlus size={20} /></button>
              </div>
              </div>
            </div>
          </div>
          <button onClick={()=> remove(item.id)} className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500'><Trash size={20}/></button>
        </div>
        ))}
        <h3 className='text-xl font-bold mt-4'>Total: ${total.toFixed(2)}</h3>
       </div>
      )}
    </div>
  )
}

export default Cart