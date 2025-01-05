import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {clearCart} from "../../utils/cartSlice";
import DishCard from './DishCard';
import EmptyCart from './EmptyCart';
const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  const groupedItems = cartItems.reduce((acc, item) => {
    const id = item.card.info.id; // Replace with your unique identifier
    if (!acc[id]) {
      acc[id] = { ...item, quantity: 1 };
    } else {
      acc[id].quantity += 1; // Increment the quantity for duplicate items
    }
    return acc;
  }, {});
  const groupedItemsArray = Object.values(groupedItems);
  //console.log(groupedItemsArray);
  const totalPrice = groupedItemsArray.reduce(
    (total, item) =>
      total + (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100) * item.quantity,
    0
  );  
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  }
  return (
    <div className="w-9/12 align-center justify-self-center mt-10 bg-purple-500 p-2 rounded-2xl shadow-lg">
        <div className="text-center font-bold text-4xl text-black p-2">
            <h1> Items in  🛒  </h1> 
        </div>
        <DishCard dishObj={groupedItemsArray}/> 
        {cartItems.length === 0 ? <EmptyCart/> : 
                <div className="text-center font-bold text-2xl text-black rounded-md  mt-3 p-2 flex justify-between">
                  <button className="text-white p-1 rounded shadow-lg bg-red-500" onClick={handleClick}>
                         Clear Cart  🗑   ️
                  </button>
                  <h5>Total Price : Rs. {totalPrice}</h5>
                </div> 
        }
        
    </div>
  )
}

export default Cart;    