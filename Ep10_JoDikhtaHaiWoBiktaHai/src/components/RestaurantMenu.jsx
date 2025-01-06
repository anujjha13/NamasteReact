import React from 'react';
import {useEffect ,useState} from 'react';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import {RestaurantCategory} from './RestaurantCategory';
const RestaurantMenu = () => {

  const { resId }= useParams();
  const resMenu=useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  //console.log(resMenu);
  return (
    // m-20 p-2 ml-80 bg-red-400 border-double border-2 border-black max-w-screen-md
    <div className="w-6/12 mt-20 justify-self-center ml-auto mr-auto">
          {resMenu.map((res, index)=> (
              <RestaurantCategory 
                resObj={res}
                showItems={index === showIndex ? true : false }
                setShowCategory={() => setShowIndex(index)}
              />
          ))}         
    </div>
  )
};

export default RestaurantMenu;
