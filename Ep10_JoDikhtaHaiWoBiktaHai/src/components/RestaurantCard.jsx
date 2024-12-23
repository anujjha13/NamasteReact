import { Link } from "react-router-dom";
const RestaurantCard = (props) =>{
    const {resObj}=props;
    const {cloudinaryImageId,name,locality,cuisines,avgRating,id}= resObj?.info;
    return (
        
        // <Link to={"/restaurant/"+id}> I have used it while creating the card in Body
            <div className="bg-red-400 p-2 m-2 max-size-104 hover:border-2 border-red-700" >
                    <img className="size-96"alt="restaurant-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+resObj.info.cloudinaryImageId}/>
                    <div className="res-detail">
                        <h3>{name}</h3>
                        <h4>Location : {locality}</h4>
                    </div>
                    <div className="text-wrap">
                        <h5 className="text-balance">Cuisines : {cuisines.slice(0, 3).join(",")}</h5>
                        <h5>Rating : {avgRating}</h5>
                    </div>
            </div>
        // </Link>
    )
}

export default RestaurantCard;