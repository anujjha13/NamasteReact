Features to implement :
1)  Auto suggestions when i search for restaurants:

    import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { resList } from "../../utils/RestList";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilter = () => {
        const filteredRestaurant = restaurants.filter((res) => res.info.avgRating > 4.5);
        setFilteredRestaurants(filteredRestaurant);
    };

    const handleSearch = () => {
        const searchedRestaurant = restaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredRestaurants(searchedRestaurant);
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setSearchValue(input);

        if (input === "") {
            setSuggestions([]);
            return;
        }

        const filteredSuggestions = restaurants
            .filter((res) => res.info.name.toLowerCase().includes(input.toLowerCase()))
            .map((res) => res.info.name);

        setSuggestions(filteredSuggestions.slice(0, 5)); // Show top 5 suggestions
    };

    return filteredRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter-option">
                <div className="search" style={{ position: "relative" }}>
                    <input
                        type="text"
                        className="search-bar"
                        value={searchValue}
                        onChange={handleInputChange}
                        placeholder="Search for restaurants..."
                    />
                    <button type="button" onClick={handleSearch}>
                        Search
                    </button>
                    {suggestions.length > 0 && (
                        <ul
                            style={{
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                width: "100%",
                                border: "1px solid #ccc",
                                backgroundColor: "#fff",
                                listStyle: "none",
                                padding: "8px",
                                margin: 0,
                                zIndex: 1000,
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    style={{ padding: "8px", cursor: "pointer" }}
                                    onClick={() => {
                                        setSearchValue(suggestion);
                                        setSuggestions([]);
                                    }}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button onClick={handleFilter}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;


2)