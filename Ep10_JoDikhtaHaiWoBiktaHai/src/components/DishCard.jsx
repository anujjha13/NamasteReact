import React from 'react'
import { useDispatch } from 'react-redux';
import {addItem} from "../../utils/cartSlice";
const DishCard = (props) => {
   console.log(props?.dishObj);
  // const {id,imageId,name,category,description,itemAttribute,price,ratings,defaultPrice}=props?.dishObj?.card?.info;
  const categoryMenu =  props?.dishObj;
  //console.log(categoryMenu);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    console.log(item);
    dispatch(addItem(item));
  }
  return (
        categoryMenu.map((item)=> (  
            <div className="dish-card p-0.1 border-2 bg-gradient-to-r from-red-300 via-purple-500 to-indigo-400">
              <div className="flex justify-between">
                <div className="p-2">
                    <h5 className="font-bold">{item?.card?.info?.name} - Rs. {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</h5>
                    <h5>{ item?.card?.info?.description}</h5>
                </div> 
                <div>
                <img className="size-20 border-black border-2 rounded-md "src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+item?.card?.info.imageId}/>
                <button className="absolute bg-black text-white -ml-20 -mt-8 rounded-md border-2 p-1" onClick={() => handleClick(item)}>Add + </button>
                {item.quantity ? <h5> Qty : {item.quantity} </h5> : ""}
                </div>
              </div>  
            </div>
        ))
  )
}

export default DishCard;