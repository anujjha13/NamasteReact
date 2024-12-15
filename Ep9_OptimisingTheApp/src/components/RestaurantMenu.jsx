import React from 'react';
import {useEffect ,useState} from 'react';
import { useParams } from "react-router-dom";
import DishCard from './DishCard';
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId }= useParams();

  const resMenu=useRestaurantMenu(resId);

  return (
    <div className="restaurant-menu">
            {resMenu.map((res,index)=> (
               <DishCard dishObj={res}/>
            ))}         
    </div>
  )
};

export default RestaurantMenu;
