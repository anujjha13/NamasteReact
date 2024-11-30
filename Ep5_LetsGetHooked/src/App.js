import ReactDom from "react-dom/client"; 
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
    return (
        <div className="app">
        {/* Place Header component */}
        <Header/>
        {/* Place Body component */}
        <Body/>
        {/* Place Footer component */}
        </div>
    )
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App/>);