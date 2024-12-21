import React from 'react'

const DishCard = (props) => {
  console.log(props.dishObj.card.info);
  const {id,imageId,name,category,description,itemAttribute,price,ratings}=props?.dishObj?.card?.info;
  return (
    <div className="dish-card p-4 max-w-screen-md ">
        <div className="flex bg-yellow-200">
           <img className="size-40 border-black border-2 rounded-md"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+(imageId)}/>
           <div className="p-12 m-2">
              <h5>{name}</h5>
              <h5>{ price ? price/100 : `Not Available`}</h5>
           </div> 
        </div>  
    </div>
  )
}

export default DishCard;
