import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import {resList} from "../../utils/RestList"
import {useState}from "react"
const Body = () => {
    const [restaurants, setRestaurants] = useState(resList);

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