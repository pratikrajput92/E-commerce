import React from 'react'
import Cart from '../component/Cart'

function CartPage({cart, remove, UpdateQty}) {
  return (
    <div>
      <Cart cart={cart} remove={remove} UpdateQty={UpdateQty}/>
    </div>
  )
}

export default CartPage