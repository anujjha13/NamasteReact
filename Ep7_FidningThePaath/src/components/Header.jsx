import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className = "head" >
            <img className="logo" alt="logo" src="https://dynamic.design.com/preview/logodraft/45acf276-9819-49ca-a552-1622fa18105c/image/large.png"/>
            <ul className="nav-items">
                <li><Link to="/">Home </Link></li>
                <li><Link to="/contact">Contact Us </Link></li>
                <li>Orders</li>
            </ul>
        </div>
    )
};

export default Header;
