//how to create sibling tags and nested together

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"This is h1 tag"),
            React.createElement("h2",{},"This is h2 tag")
        ]
    )
)


//now to render

root.render(parent);


