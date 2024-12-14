import React from 'react'

const DishCard = (props) => {
  console.log(props.dishObj.card.info);
  const {id,imageId,name,category,description,itemAttribute,price,ratings}=props?.dishObj?.card?.info;
  return (
    <div className="dish-card">
        <div className="dish-overview">
           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+(imageId)}/>
           <h5>{name}</h5>
        </div>  
    </div>
  )
}

export default DishCard;
