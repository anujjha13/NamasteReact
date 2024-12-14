1) While using useStateEffect it is not required or mandatory to use dependecy array.
    -useEffect(()=>{
        console.log("UseEffect callled"))
    })
        -> using above way it will called after every rendering .

    -useEffect(()=>{
        console.log("UseEffect callled"))
    },[])
        -> if using empty array ,it will called only after first rendering.

    -useEffect(()=>{
        console.log("UseEffect callled"))
    },[localstatevariable])

        ->if you want to render it on when a specific local state variable changes ,you can place it in that array

2) A lot of developers make mistakes that useState snippet is declaring outside of your component ,it will throw error and always try to declare in starting of your component declaration.

    - Also do not try to declare it inside if condition , for loop or any function (This is considered as bad practice as this will lead to change in scoping of that state variable)

3) For routing ,we are gonna use createBrowserRouter ,RouterProvider from react-router-dom;

    -createBrowserRouter is used to define the configuration of Routing
    -RouterProvider is used to provide this configuration to router while rendering my application.

4) If you go on webiste of router documentaion ,there you can see multiple router and everyone has its own usage ,but prefereably you can use the createBrowserRouter.

5) Recat Router dom has created a page for wrong router path. You can create your own path as well.

6) useRouteError is the hook which will provide you the error description ,you can use it to get to know more about the error.You can console it to get to know about details which it can give.

    Syntax: 
        const err=useRouteError();

7) Now if you want your header be constant and your rest components should rendered according to Route ,then you can use Outlet from 'react-router-dom' ,which will be replaced by the component you have mentioned in the childrenRoute.

8) If you want to make your nav section to jump to that particular section , you can use anchor tag but it will refresh your page ,which is not required ,so instead of that you can (Link) component provide by react-router-dom 

    Syntax : 

              <li><Link to="/">Home </Link></li>
              <li><Link to="/contact">Contact Us </Link></li>

9) Single page application is basically when we do client side rendering and there is no need of refreshing the page to reach other page ,we only renders multiple times instead of refreshing.

10) Two types of rendering :
    -SERVER Side Rendering: When we redirects to other page or you can say use some network calls for each rendering
    -CLIENT Side Rendering: But in this we do not make any network call ,we at first rendering loads all data.

11) If you want to create dynamic routing ,then you can use this ':' in your path:

    Syntax:
     
     {
                path: "/restaurant/:resId",
                element: <Menu/>
     }

12) If you want to route your restaurant card to respective menu ,you can use Link component ,and use (`) backtick and $ to refer that value.

    const RestaurantCard = (props) =>{
    const {resObj}=props;
    const {cloudinaryImageId,name,locality,cuisines,avgRating,id}= resObj?.info;
    return (
        
        <Link to={`/restaurant/${id}`}>  or use this <Link to={"/restaurant/"+ id}> 
            <div className="res-card" >
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
        </Link>

    )
    }
    ==========Or you can use ReactHooks named useParams to get the dynamic params passed in url===========

13) When you get to html which is being render of your app on browser, you will see that when we use Link tag instead of Anchor tag ,you will see under the hood Link also uses anchor tag only ,but it will make that anchor tag special by using it so it will not refresh on every route.We use Link component to make our app SPA.

14) 


