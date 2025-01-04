import React from 'react'
import DishCard from './DishCard';
export const RestaurantCategory = ({resObj ,showItems ,setShowCategory}) => {
   // console.log(showItems);
   // console.log(resObj);
    const handleShowItems = () => {
        setShowCategory();
    }
    return (    
        <div>
            <div className="p-4 flex justify-between m-4 bg-red-400 shadow-lg cursor-pointer border-red-950 border-2" onClick={handleShowItems}> 
                <span className="font-bold text-lg">{resObj?.card?.card?.title + " (" + resObj?.card?.card?.itemCards?.length+ ")"}</span>
                <span>⬇️</span>
            </div>
            {showItems && <DishCard dishObj={resObj?.card?.card?.itemCards}/>}
        </div>
    )
}


