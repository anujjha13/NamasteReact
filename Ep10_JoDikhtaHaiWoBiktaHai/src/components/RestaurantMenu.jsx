import React from 'react';
import {useEffect ,useState} from 'react';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import {RestaurantCategory} from './RestaurantCategory';
const RestaurantMenu = () => {

  const { resId }= useParams();
  const resMenu=useRestaurantMenu(resId);

  console.log(resMenu);
  return (
    // m-20 p-2 ml-80 bg-red-400 border-double border-2 border-black max-w-screen-md
    <div className="text-center w-6/12 mt-20 justify-self-center">
          {resMenu.map((res,index)=> (
              <RestaurantCategory resObj={res}/>
          ))}         
    </div>
  )
};

export default RestaurantMenu;
