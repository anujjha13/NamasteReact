import {useState , useEffect } from 'react';
import {MENU_URL} from './constants';
const useRestaurantMenu = (resId) =>{

    //console.log("Custom Hook");
    const [resMenu, setResMenu] = useState([]);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
          MENU_URL+resId
        );
        //console.log( MENU_URL+resId)
        const json =  await data.json();
        //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        // setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

        const categoryMenu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> (
            c.card?.card?. ["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ));
        setResMenu(categoryMenu);
    }

    
    return resMenu;
}

export default useRestaurantMenu;