1- Till now we have used long commands to just start our project right ,so now what we want to do is make a script.

        -> npx parcel index.html
        -> npx parcel build index.html

    We will add these commands in scripts section to use their key to run these commands

     "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
     "start": "parcel index.html"
  },

2- REACT ELEMENT :

    React Element is not a html element ,instead it is a JS object if you try to see in console you will get it,but when we render them into DOM it will become the HTML element.

    =>React.createElement -> Object -> Render -> HTML Element       

3- Now comes the JSX in picture to make our life easy because we are taking so much time to create a single html element and then render it to dom root. This is more readable and make devloper life easy

    //if we start from core react we write like this
    const heading = React.createElement(
        "h1",{id="heading"},{"This is heading"}
    );

    //we use jsx for sav our time also it is not React thing React   and jsx both are individuals
    const jsxHeading = <h1 id="heading"> This is jsx Heading <h1>

    If you log both in console it will return the same thing and also this jsx code will also do the same thing React.createElement.

4-  JSX v/s React.createElement

    JSX -> React.createElement -> JS object -> On render HtmlElement 
     |                 |
     |_________________| 
     Babel is converting 

    React.createElement -> JS object -> On render HtmlElement 


->If you go to this website you'll realise how babel convert jsx code :https://babeljs.io/

   [ ![BableCompiler](NamasteReact/Ep3_LayingFoundation/Img/EC81DF4B-8A39-4B2F-8C7F-14E0772E90CC.png?raw=true "Title")](https://github.com/anujjha13/NamasteReact/blob/main/Ep3_LayingFoundation/Img/EC81DF4B-8A39-4B2F-8C7F-14E0772E90CC.png)

Note:

 1.React Element is similar to DOM element.
 2.JSX is not HTML inside Javscript never say this , you can say it is like HTML or XML ,but it is not JSX is HTML or XML inside Javscript.
    const jsxHeading = <h1>This is jsxHeading not HTML <h2>;
 3.If someone asks that we write code for machine or for humans ,the answer is both because if we are writing it only for machines ,then we will try to write in binary format only ,but we are writing code for first humans then for machines.

 4. JS Engine or Browser will only understand pure js or EcmaScript (heard of ES6) ,so it will not able to understand line 27 code.

 5. Babel(Basically a JS compiler) is used for transcompiling the jsx code so that it will read by JSengine or React will understand.It is not created by Facebook lol.And parcel has downloaded babel 

 6. 
