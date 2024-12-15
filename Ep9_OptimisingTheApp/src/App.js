import ReactDom from "react-dom/client"; 
import React ,{lazy,Suspense} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import {About} from "./components/About";
// import InstaGrocery from "./components/InstaGrocery";
import {Contact} from "./components/Contact";
import {Error} from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
const InstaGrocery = lazy(()=> import("./components/InstaGrocery"));
const App = () => {
    return (
        <div className="app">
        {/* Place Header component */}
        <Header/>
        {/* Place Body component */}
        {/* <Body/>
        Place Footer component */}
        <Outlet/>
        </div>
    )
};
const AppConfiguration = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/instagrocery",
                element: <Suspense fallback={<h1>Loading Grocery Items</h1>}><InstaGrocery/></Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },  
])
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppConfiguration}/>);