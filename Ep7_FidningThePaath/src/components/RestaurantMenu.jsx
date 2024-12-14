import React from 'react';
import {useEffect ,useState} from 'react';
import { useParams } from "react-router-dom";
import DishCard from './DishCard';

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const { resId }= useParams();
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.600812118822322&lng=77.03230961760868&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json =  await data.json();
    //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  }

  useEffect(() => {
    fetchMenu();
  },[]);
  return (
    <div className="restaurant-menu">
            {resMenu.map((res,index)=> (
               <DishCard dishObj={res}/>
            ))}         
    </div>
  )
};

export default RestaurantMenu;
