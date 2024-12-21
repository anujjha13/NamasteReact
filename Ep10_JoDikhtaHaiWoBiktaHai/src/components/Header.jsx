import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {

    const onlineStatus=useOnlineStatus();
    return (
        <div className = "h-20 m-2 flex justify-between bg-purple-300 border-solid border-2 border-black" >
            <img className="w-20" alt="logo" src="https://dynamic.design.com/preview/logodraft/45acf276-9819-49ca-a552-1622fa18105c/image/large.png"/>
            <div className="nav-items">
                <ul className="flex justify-between p-5">
                    <li className="mr-16">Online Status: {onlineStatus ? "🟢":"🔴"}</li>
                    <li className="mr-16"><Link to="/">Home </Link></li>
                    <li className="mr-16"><Link to="/contact">Contact Us </Link></li>
                    <li className="mr-16"><Link to="/instagrocery">Insta Grocery </Link></li>
                    <li className="mr-16">Orders</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
