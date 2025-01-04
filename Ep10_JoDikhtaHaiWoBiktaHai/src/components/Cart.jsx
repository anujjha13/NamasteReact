import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {clearCart} from "../../utils/cartSlice";
import DishCard from './DishCard';
const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  }
  return (
    <div className="w-9/12 align-center justify-self-center mt-10">
        <div className="text-center font-bold text-2xl text-red-600">
            <h2> Items in your  🛒  </h2> 
        </div>
        {cartItems.length === 0 ? <h2 className="text-center m-8 font-bold ">Your Cart is Empty !!! Please add items to your cart</h2> : 
                <button className="bg-blue-400 hover:bg-blue-700 text-white p-1 rounded m-5 " onClick={handleClick}>
                        Clear Cart  🗑   ️
                </button>

        }
        <DishCard dishObj={cartItems}/>   
    </div>
  )
}

export default Cart;    