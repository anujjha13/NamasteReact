import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import {RES_API} from "../../utils/constants"
import {useState,useEffect}from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchValue,setSearchValue] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] =useState([]);
    console.log("Body Render happens")
    const fetchData = async () => {
        const data= await fetch(
            RES_API
        );

        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
        // setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        //optional chaining
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(() => {fetchData()},[]);
    
    function handleFilter(){
        const filteredRestaurant=restaurants.filter((res)=>{
            return res.info.avgRating>4.2;
        });
        setFilteredRestaurants(filteredRestaurant);
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
                    searchedRestaurant.length>0 ? setFilteredRestaurants(searchedRestaurant) : alert("The Restaurant you are searching for is not available right Now");
                }}>Search</button>
            </div>
                <button onClick={handleFilter}>Top Rated Restaurant </button>
            </div>
           
                <div className="res-container">         
                    {filteredRestaurants.map((restaurant, index) => (
                        <Link to={"restaurant/"+restaurant.info.id}>
                            <RestaurantCard key={restaurant.info.id} resObj={restaurant}/>
                        </Link>
                    ))}  
                </div>    
        </div>
        )
};

export default Body;