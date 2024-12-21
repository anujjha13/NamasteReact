import {useState , useEffect } from 'react';
import {MENU_URL} from './constants';
const useRestaurantMenu = (resId) =>{

    console.log("Custom Hook");
    const [resMenu, setResMenu] = useState([]);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
          MENU_URL+resId
        );
        console.log( MENU_URL+resId)
        const json =  await data.json();
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    
    return resMenu;
}

export default useRestaurantMenu;