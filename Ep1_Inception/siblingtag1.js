//how to create sibling tags of parent and nested together

const root = ReactDOM.createRoot(document.getElementById("root"));

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


//now to render but if you consider isn't tough to read this or write instead of html tags
//there comes a use of jsx 

root.render(parent);


