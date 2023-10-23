import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addordertohistory, orderitems } from "../redux/actions/Actions";

const CartItem = ({ item }) => {
  return (
    <div className="food-item-wrapper">
      <div className="cart-item food-item">
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
    </div>
  );
};

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  console.log(cart);

  const element = useRef()

  let totalprice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalprice += cart[i].price;
  }

  return (
    <div className="cart-wrapper">
      <div className="popup" ref={element}>
        <div  className="popup-child">
          <div>
            <h2>Congrats on placing your order</h2>
          </div>
          <div className="close" onClick={()=>{
            element.current.style.display = "none"
          }}></div>
        </div>
      </div>
      <div>
        {cart.map((item, key) => {
          return <CartItem item={item} key={key} />;
        })}
      </div>
      <div className="price">
        <div>
          <h3>Total price</h3>
        </div>
        <div>{totalprice}</div>
      </div>
      <div className="button-wrapper">
        <button
          onClick={() => {
            dispatch(addordertohistory(cart));
            dispatch(orderitems());
            element.current.style.display = "flex"
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
