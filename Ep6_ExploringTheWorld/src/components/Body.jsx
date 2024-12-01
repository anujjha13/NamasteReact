import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import {resList} from "../../utils/RestList"
import {useState,useEffect}from "react"
const Body = () => {
    const [restaurants, setRestaurants] = useState(resList);

    const fetchData = async () => {
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
        setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    function handleFilter(){
        const filteredRestaurant=restaurants.filter((res)=>{
            return res.info.avgRating>4.5;
        });
        setRestaurants(filteredRestaurant);
        console.log(filteredRestaurant);
    }
    return (
        <div className="body">
            <Search/>
            <button onClick={handleFilter}>Top Rated Restaurant </button>
            <div className="res-container">         
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id}resObj={restaurant}/>
                ))}
            </div>    
        </div>
    )
};

export default Body;