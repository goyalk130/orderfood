import React from 'react'
import { useSelector } from 'react-redux'
import FoodItem from './FoodItem'

const FoodContainer = () => {

    const food = useSelector(store=>store.food)
    console.log(food)
  return (
    <div>{
        food.map((item,val)=>{
            return (<FoodItem key={val}  item={item} />)
        })
    }</div>
  )
}

export default FoodContainer