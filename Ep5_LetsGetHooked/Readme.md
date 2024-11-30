1- React Advantages
    - Why we are using when we cna build using html,css ,js because it make our work easier and provide devloper better features.
    - Break your app.js into multiple files like every components has separate file

    -Folder Structure (You can visit website of react for folder structure lol)
        -src
            -components
                -firstcomponent

    -Try to use component file name as your component name and it should be start from Captial Letter

    - Some developer also use file extension instead of js they write .jsx(pretty cool logo and also it hardly matters js or jsx)

    - Also make sure you must import your components in App.js to use it if you have seperate file and also you must export it from your component file

        - Two ways to export Component
            -export default ComponentName;(end line of your component file)
            -
    - There is debate in industry that while importing component in App.js,you must include extenion or not

        -import ComponentName from ".component/componentName.js"

                or

        -import ComponentName from ".component/componentName"

    - Do not ever kepp your hard coded data in your component file not even hard coded string (like url for logo and cloudinary) instead put it into util/common named folder and inside it make a file named constants.

    - You only can use one default export in one file , otherwise if you trie to use two or more than it ,it will throw error

    - There are two methods of import and export:
        - First is export default 
            In this we use export default at end of file ;
            While importing you directly use below syntax:
                import component/constant_name from "path";

        -Second is named export
            In this we can use while exporting like below:
                export const CON_URL="url"; while declaring
                export const CON_URLL; AFTER DECLARATION
            While importing you have to use curly braces like below:
                import {component/constant_name} from "path";

    - One question ,can you use both export in one file?
    - Always try to make sure your any file of component does not exceed more than 100 lines

    - When you want to use onClick event either you can directly write an arrow function in itor you define on top (starting of component ) and just write in it not invoke function using this (),it will automatically invoke when that onclick event happens

    -React Hooks is basically normal JS utility code 
        -useState Hooks : Why it is required ?In filter case when we are filtering after that list changes but we require to render the updated list also,it will make a variable superpowerful, it is making a sync between UI layer and DB layer.Whenever a stateVariable changes ,react will re-render its component.

        -So the function which we have in our useState syntax setVariable is actually triggering the diff algorithm

        -UseState is actually doing array Destructuring.

             => const [data,setData] = useState(list);

                But actually it is doing:

                const res=useState(list);
                const data=res[0];
                const setData=res[1];

    -React Fibre (Previously Diff Algorihtm | Reconcillation) : It is used for 
    manipulating DOM efficiently , this is the reason why React is superfast becuase it uses this algorithm.

        DOM is actually the tags which we use generally (div,h1,h2) and Virtual Dom is basically the representation of DOM in Javascript object (The component we made is basically virtual dom and we know component is JS object) and that components will keep the virtual dom in it.

    -Diff Algorithm :Basicallt find the difference between the previous Virtual dom and current Virtual dom and then renders the changes in ACTUAL DOM,When React 16 comes in we have new alogorithm named React Fibre.

    -Reconcillation - It is basically the process when something changes in UI


    - For more information about React Fibre ,read this article:
        https://github.com/acdlite/react-fiber-architecture

    

    
    

    
