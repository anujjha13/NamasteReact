import React,{useState} from 'react'
import DishCard from './DishCard';
export const RestaurantCategory = (props) => {

    console.log(props?.resObj?.card?.card);
    const [showCategory, setShowCategory] = useState(false)
    const handleShowItems = () => {
        console.log("clicked on item");
        setShowCategory(!showCategory);
    }
    return (
        <div>
            <div className="p-4 flex justify-between m-4 bg-red-400 shadow-lg cursor-pointer border-red-950 border-2" onClick={handleShowItems}> 
                <span className="font-bold text-lg">{props?.resObj?.card?.card?.title + " (" + props?.resObj?.card?.card?.itemCards?.length+ ")"}</span>
                <span>⬇️</span>
            </div>
            {showCategory && <DishCard dishObj={props?.resObj?.card?.card?.itemCards}/>}
        </div>
    )
}
import React from 'react'

