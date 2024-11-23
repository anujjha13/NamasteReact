//how to create sibling tags of parent and nested together

const root = ReactDOM.createRoot(document.getElementById("root"));

//React.createElement -> JS object -> On render HtmlElement 
const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"This is h1 tag"),
            React.createElement("h2",{},"This is h2 tag")
        ]
        ),
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"This is h1 tag"),
                React.createElement("h2",{},"This is h2 tag")
            ]
        )
    ]

)
//JSX (transpiled before it reaches to JS Engine ) - Parcel - Babel
//JSX -> React.createElement -> JS object -> On render HtmlElement 
const jsxHeading = <h1 id="heading">This is Jsx Heading</h1>
console.log(jsxHeading);
//now to render but if you consider isn't tough to read this or write instead of html tags
//there comes a use of jsx 

// root.render(parent);
root.render(jsxHeading);

