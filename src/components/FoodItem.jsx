import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/actions/Actions";

const FoodItem = ({ item }) => {

   const dispatch =  useDispatch()

  return (
    <div className="food-item-wrapper">
        <div className="food-item">
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.price}</div>
    </div>
    <button onClick={()=>{
            dispatch(addtocart(item))
    }} >Add to cart</button>
    </div>
  );
};

export default FoodItem;
