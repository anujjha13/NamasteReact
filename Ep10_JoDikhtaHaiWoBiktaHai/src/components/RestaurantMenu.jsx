import React from 'react';
import {useEffect ,useState} from 'react';
import { useParams } from "react-router-dom";
import DishCard from './DishCard';
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId }= useParams();

  const resMenu=useRestaurantMenu(resId);

  return (
    <div className="m-20 p-2 ml-80 bg-red-400 border-double border-2 border-black max-w-screen-md ">
            {resMenu.map((res,index)=> (
               <DishCard dishObj={res}/>
            ))}         
    </div>
  )
};

export default RestaurantMenu;
