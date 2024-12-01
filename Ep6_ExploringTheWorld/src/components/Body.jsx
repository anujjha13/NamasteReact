import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import {resList} from "../../utils/RestList"
import {useState,useEffect}from "react"
import Shimmer from "./Shimmer";
const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchValue,setSearchValue] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] =useState([]);

    const fetchData = async () => {
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" ,
          
        );

        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
        // setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        //optional chaining
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(() => {fetchData()}, []);
    
    function handleFilter(){
        const filteredRestaurant=restaurants.filter((res)=>{
            return res.info.avgRating>4.5;
        });
        setFilteredRestaurants(filteredRestaurant);
        console.log(filteredRestaurant);
    }

    // if (restaurants.length === 0){
    //     return <h1>Loading</h1>; 
    // }
    
    //condtional rendering :rendering based on condition
    // if (restaurants.length === 0){
    //     return <Shimmer/>; 
    // }
        
    return filteredRestaurants.length === 0 ? (
        <Shimmer/>
    ) : 
       ( <div className="body">
            <div className="filter-option">
            <div className="search">
                <input type="text" className="search-bar" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
                <button type="search-btn" onClick={()=>{
                    const searchedRestaurant=restaurants.filter((res)=>{
                        //why lowercase to search making efficient
                        return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
                    });
                    setFilteredRestaurants(searchedRestaurant);
                }}>Search</button>
            </div>
                <button onClick={handleFilter}>Top Rated Restaurant </button>
            </div>
            <div className="res-container">         
                {filteredRestaurants.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id} resObj={restaurant}/>
                ))}  
            </div>    
        </div>
    )
};

export default Body;