import { React } from "react";// const root = ReactDOM.createRoot(document.getElementById("root"));
import {ReactDOM} from "react-dom/client";  // const heading = React.createElement("h1",{},"This is React Element Heading");

//React.createElement -> JS object -> On render HtmlElement 

//JSX (transpiled before it reaches to JS Engine ) - Parcel - Babel
//JSX -> React.createElement -> JS object -> On render HtmlElement 
const jsxHeading = <h1 id="head">This is Jsx Heading</h1>
console.log(jsxHeading);
//now to render but if you consider isn't tough to read this or write instead of html tags
//there comes a use of jsx 

//root.render(jsxHeading);

//React Component 

//this is React Element
const heading2 = <h1> Hi this is heading 2</h1>

//but it is good practice to use return and () parenthesis ->this is use when multiple tags are there
const HeadingComponent = () =>(
    <h1> Hi this is heading Component</h1>
)

const HeadingComponent1 = () =>(
     <div>
        <HeadingComponent/>
     </div>
)

const HeadingComponent3 = () => <h1> Hi this is heading </h1>

//all three have same it's just way of writing if you have single React Element returning you can skip return i.e 3


//if you want to render React component you can't use it directly by name you have to use it like tags

//root.render(<HeadingComponent1/>)

// ComponentComposition -> It's just putting one component inside another component or React Element inside ReactCompoenent or React Component inside React Element
// The most powerful thing of jsx is you can write javascript code inside it like literally anything even console.log by just putting it inside {}  curly braces 

const HeadingComponent4 = () =>(
    <div>
       <HeadingComponent/>
    </div>
)

const Head = () => {
    return (
        <div>
            <h1>{2000}</h1>
            {console.log("HI")}{/* IT WILL obiously print in console block not on webapp direclty*/}
            {jsxHeading} {/* Since jsxHeading is just a object stored in const variable so it is also js code  */}
            <HeadingComponent1/>
            <HeadingComponent1></HeadingComponent1>
            {HeadingComponent1()} {/* You can use this as well if you don't want to use above 2 method we use {} as function is js code and just call the function inside it */}
        </div>
    )
};

root.render(<Head/>);