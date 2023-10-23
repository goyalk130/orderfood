import React from 'react'
import FoodContainer from './FoodContainer'
import Cart from './Cart'

const OrderFood = () => {
  return (
    <div>
      <div className='wrapper'>
        <FoodContainer/>
        <Cart/>
      </div>
    </div>
  )
}

export default OrderFood