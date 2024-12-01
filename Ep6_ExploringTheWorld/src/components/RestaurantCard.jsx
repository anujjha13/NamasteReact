const RestaurantCard = (props) =>{
    const {resObj}=props;
    const {cloudinaryImageId,name,locality,cuisines,avgRating}= resObj?.info
    return (
        <div className="res-card">
                <img alt="restaurant-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+resObj.info.cloudinaryImageId}/>
                <div className="res-detail">
                    <h3>{name}</h3>
                    <h4>{locality}</h4>
                </div>
                <div className="res-detail-misc">
                    <h5>{cuisines.join(",")}</h5>
                    <h5>{avgRating}</h5>
                </div>
        </div>
    )
}

export default RestaurantCard;