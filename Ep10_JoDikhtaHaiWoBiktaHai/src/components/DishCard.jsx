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
    // console.log(item?.name);
    dispatch(addItem(item));
  }
  return (
        categoryMenu.map((item)=> (  
            <div className="dish-card p-0.1 border-2">
              <div className="flex bg-red-300 justify-between">
                <div className="p-4">
                    <h5>{item?.card?.info?.name}</h5>
                    <h5>{ item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</h5>
                </div> 
                <div>
                <img className="size-20 border-black border-2 rounded-md "src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+item?.card?.info.imageId}/>
                <button className="absolute bg-black text-white -ml-24 -mt-10 rounded-md border-2 p-1" onClick={() => handleClick(item)}>Add + </button>
                </div>
              </div>  
            </div>
        ))
  )
}

export default DishCard;
