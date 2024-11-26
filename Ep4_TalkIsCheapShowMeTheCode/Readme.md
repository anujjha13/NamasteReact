//Mock Design of our website
    -Header
        -Logo
        -NavItems
            -Home
            -AboutUs
            -Orders
    -Body
        -Search
        -RestroCardComponent
            -ResstroCard
                -img
                -rest_name
                -rating
                -cuisine
                -time
    -Footer
        -Links
        -Address
        -Copyrights
        -ContactUs

//Logo will be created by any ai Tool : https://dynamic.design.com/preview/logodraft/45acf276-9819-49ca-a552-1622fa18105c/image/large.png


1) Props is also termed as properties (for your understanding) ,and passing props to React component is nothing just passing argument to function and then use this argument in your function 
    - We have used this concept in RestCard which we have used for dynamic listing of names,rating ,location

    -One way is in component you write as Props and then use it using .

    -Second way is you directly destructure props on fly.{{argument1,argument2}}

2) Destructuring props : 

3) Congif driven UI : If your website is driven by the data we have in our backend ,then it is known as Config Driven UI i.e for different user /different location we have different data and will shothat data only in UI

4) Optimising Code : 

    -   const {cloudinaryImageId,name,locality,cuisines,avgRating}= resObj?.info //destructruing
    -   while loop for RestaurantCards
    -   Akshay said to use map filter :
         {resList.map((restaurant) => (
                    <RestaurantCard resObj={restaurant}/>
        ))}

    - You will see one warning when you use child components ,that every child has unique key ,so for this    you should give them a unique key 

        {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id}resObj={restaurant}/>
        ))}

        Reason is if you donot pass key react will re-render all the components present as RestauramtCard when any new card is pushed to our list or data ,if you pass key then it will uniquely idenetify only one new cards needs to be rendered

    - React official docs says never use key as index because 

        {resList.map((restaurant, index) => (
                    <RestaurantCard key={index}resObj={restaurant}/>
        ))}
 
    - Not using key (Not acceptable) <<<<<< Using index as key <<<<<<<< Unique key as key(Best Practice) 
