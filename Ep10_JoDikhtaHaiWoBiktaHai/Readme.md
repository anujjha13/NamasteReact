||||||||||||||||||||||||||| EPISODE 10 ||||||||||||||||||||||||||||||||||||||

Till now we have used css , You can use Sass (It has some superpower with css ,it will make your writing css make easy and advanced)

1) SCSS , SaSS (Not recomended to industry level applciation),Styled components(A lot of companies use this like Uber) ,MaterialUI (They give you components which is prestyled ),Chakra UI , Ant.design ,TailwindCSS

2) Tailwind is not only work for react ,it will work for angular ,normal html pages as well.There are various ways to install in your project ,we can use different way y checkingg frameworks and then isnall it,in our case using parcel guide on ther website - > https://tailwindcss.com/docs/guides/parcel

    -   npm install -D tailwindcss postcss
        npx tailwindcss init

        This will create a tailwind.config.js file ,but have you notice what is this postcss which we use in above command ,it is tool for transforming css with JS which is used by tailwind.

    -   Postcssrc will help parcel to understand tailwindcss,You need to create a .postcssrc file in which  these code be written.

        {
        "plugins": {
            "tailwindcss": {}
        }
        }

    - Configure your template paths in your tailwind.config.js file ,only content properties are added whcih means on which files i can use my tailwind.css ,you can omit tsx ,ts inside content if you are not using thi.

        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: [
            "./src/**/*.{html,js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }



3) Starting with TailwindCSS : 

        - flex (display)
        - w- (width)
        - p- padding
        - m- margin
        - px - padding on x axis and py- padding on y-axis
        - use size-96 for img tag as earlier i was facing issue in non-uniformity of restaurant image in cards

    You can search of any style you want in tailwindcss website ,but this is little bit tedious task for us ,so we have an extension also which helps us ,but try to use it in intial days from tailwind site .And the best part is you can hover on your written css property to get to know what actual css is applying.

4) One advantage of using the tailwind is they only ship those css which you used in your application .

5) One con is it make sometimes your code ugly as sometime you have to write a long line of css and it comes with initial learning curve.

6) One thing if i have used m-4 or p-4 many times ,so will it import that many times? No ,it will only use one import .

7) You can write @media queries : sm-small,md-medium devices ,lg- large devices:

    example: <div className="bg-red-500 sm: bg-black"> It means when your device is greater than small :black otherwise it must be red. 

8) You can make dark mode easily over here using tailwind css:

    Synatx: <div className="dark:your dark mode css">

9) You can write your css on the go while developing.
See the last section of video from 44:00 duration



||||||||||||||       Episode 11 |||||||||||||||||||


1) HigherOrder Component take a component and return the component(it works as a enhancer which take a component ,enhances it and give the new component).

2) We gonna apply Or make HigherOrder Component in our app for using Promoted Restaurants lablel in it. But unfortunately the promote key is not present in swiggy api wheni am making so i haved used to add label for discount on restaurants

3) To overlap the lable we have used absolute property .

4) UI is very static it doesn't have llogic of its own ,the UI layer is powered by Data layer ,and the if you are able to manage your Data layer ,then your react Application can be handled easily .

5) Now we will make one feature named accodion for restaurant menu till now we have used only recomended category to show the menu for that particular restauarant now we will add more.

6) Now if you want to add accordian in your restaurant menu ,you will see a lot of card over there you need to only use menu thing right ,so you have to filter it out on basis of what?  => "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory", but you can't use @ so there is a way to do it using [],

7) We have made accordian that use toggle to collapse and expand ,but now we want to add one more functionality where if i expands one ,it will collapse other ,only one at a time should expand.Till now we have made ,in that code ,only one category can expand or collapse on itself but don't have access to other categories.

8) Use this extenion for debugging your react application :React Dev Tools which will provide you two options ,components ,profilers.

    - Components:  It is basically a virtual Dom ,in left we have UI and on right we have Data layer ,if you click on any component ,you will see all data related to that components

    - Profiller -It will record your response on that application ,it will give you details of time to reload

9) Lifting State Up is the concept which will work over here so the code which we have done will require some changes ,firstly we will change each category have its own statevariable to show to give the responisibility to its parent. and then will provide the function to set its value to its child. ->Check react documentation

10) This is what we called Controlled or uncontrolled component , uncontrolled component is called what we have earlier used ,controller component is the component what we will going to use (basically the parent is controlling the child is known as controlled components)

11) I have added the above functionality the difficulties i faced while building is first when passing more than 1 paramter you should destructure it on fly ,otherwise do separetly ,you will not get directly the value ,as you know in js everything is object so ,that boolean also becomes object so you need to destructure it.

12) Props drilling is basically passing props from parent to child but when you have to send to your last child ,it will be very bad practice to use this concept becase the in between children b/w parent and last child will have nothing to do with this props ,so we will use this React Context.

13) React Context is not exactly please don't say this in your interview that it acts like a global place | Central store from where you can access anything present in your context in your each and every corner of application.There are also other ways to handle props drilling.

14) Where you can use this react context : User logged in details , Dark Mode | Theme

15) Steps to create context : 

    1) create a separate js file in utils.
    2) Let's say UserContext.js 

        import {createContext} from "react";

        const UserContext = createContext({
            loggedInUser: "Default User",
        })

        export default UserContext;

    3) To use this contexxt you just need to use "useContext" hook;

        const data= useContext(UserContext);

                    Or

        const {loggedInUser} = useContext(UserContext);

    Note : Don't just put all data in your context ,only that data which is used in multiple components.


    4) In class based component : We don't have hooks ,so we can use this 

        <UserContext.Consumer>
            {({loggedInUser}) => <h1 className=">{loggedInUser}</h1>} (Inside jsx in which we have callback funcion)
        </UserContext.Consumer>

    5) Let's suppose we have some authentication in log in and we want to change the value in my userContext ,then i will need a ReactContextProvider.

         <UserContext.Provider value={{loggedInUser : userName }}>
            <div className="App">
                <Header />
                <Outlet />
            </div>
         </UserContext.Provider>

        I have wrapped it over all my app ,then it will reflect in my whole application.

        If i have wrapped only Header ,then it will only refelct in header component.

    6) Can i have nested Providers ,Yes you can and also change values according to you requirement.

            <UserContext.Provider value={{loggedInUser : userName }}>
                <div className="App">

                    <UserContext.Provider value={{loggedInUser : "Elon Musk" }}>
                        <Header />
                    </UserContext.Provider>
                    <Outlet />
                </div>
             </UserContext.Provider>


    7) Redux works in large scale application ,but that doesn't mean you can't use React Context in large scale application. Redux used in Industry as it helps in scaling your applcation





||||||||||||         EPISODE 12 - Let's Build our store         |||||||||||||||


1) Redux is not mandatory ,All the apps which have used redux ,can be made without it as well.

2) Redux is not a part of React it is a state management tool and not required to use only with react.

3) You can check other store as well ,example : zustand 

4) Redux offers easy debugging.

5) Redux store is kind of very large js object and it is kept in central global space, any component can read /write data from it.

6) Now question is: is it good to have all data inside it ,yes it is absolutely fine.

7) We divide our whole store into small ones called "Slices" ,we can create separate slice for different objectives ,like restaurant card ,themes, menu

8) Flow of RTK :

    let's take an example of adding items in cart:


    How to write data:
        ADD Button -> Dispatch(Action) -> Function to change slice content -> Cart Slice

        Note : This function is known as Reducer 

    How to read data: 

        We will be using Selector to read the data from cart slice and it will give you the data.

        Cart Slice -> Selector -> Cart Total on UI header 

        Note : This Selector is subscribing to the store. Here susbscribing means syncing ,as soon as my store changes ,it will update on UI as well.


9) Installing React Redux Toolkit

    -Install @reduxjs/toolkit and react-redux
    -Build our store
    -Connect app with store
    -Slice(cartSlice)
    -dispatch(action)
    -Selector

10) @reduxjs/toolkit will help in configuring our Store,createSlice and react-redux will give you Provider


    Syntax: To create store first boilerplate
    
    import {configureStore} from '@reduxjs/toolkit';

    const appStore = configureStore({
    })

    Syntax: Providing this store to our app
    
    <Provider store="storename">
                Application component wrapped inside provider
    </Provider>

    You can also use Provider only where you need that store ,above i have wrapped inside my whole application


    Syntax: Creating Slice

        import createSlice from "@reduxjs/toolkit";

        const cartSlice =createSlice({
            name: 'cart',
            initialState: {
                items: []
            }

            reducers: {
                addItem : (state,action) => {
                    state.items.push(action.payload); //why this action.payload ,because when this function will calls from UI ,it will create a object having value inside payload: {payload: "pizza"}
                },
                removeItem : (state) => {
                    state.item.pop();
                },
                clearCart: (state) => {
                    state.item.length = 0;     
                }
            }
        })

        export const {addItems,removeItem,clearCart} = carSlice.actions;   -> why you have used ,this is just syntax
        export default cartSlice.Reducer; -> why we have done this because we need redcuer from cartSlice

        note: state is the initialstate of slice,you don't required action in every function ,we have exported our actions as well as reducers

    Syntax: Configuring store and add slice in it:

    import {configureStore} from '@reduxjs/toolkit';
    import cartReducer from "./cartSlice";

    const appStore = configureStore({
        redcuer:{
            cart:cartReducer,
            user:userReducer //if we have user slice
        }
    })


    Syntax:  To read data from store in our app || Subscribing to store

    We will be using useSelctor hook which provide the access to our cartStore

    const cartItems = useSelector((store) => store.cart.items); //whenever my cart.items changes it wll reflect on my cartItems as well

11) Note there is a lot of difference in between these three :
    
    
    <button className="absolute bg-black text-white -ml-24 -mt-10 rounded-md border-2 p-1" onClick={() => handleClick(item?.card?.info)}>Add + </button>


    ->onClick={() => handleClick(item)} this will create a callback and calls when clicked

    ->onClick={handleClick(item?)} this will call function on fly

    -> onClick={handleClick} this will just give the name of function

12) Subscribing to correct store is very important otherwise it will lead to performance issue:

    - const cartItems = useSelector((store) => store.cart.items); -> this will only change cartItems when your cart.items will change 


    - 
        const store =useSelector(store);
        const cartItems = store.cart.items;

        //this will subscribe to whole store 


13) Reducer vs Reducers:

    Reducer is used in whole app level where reducer contains different reducers

    Reducers is small multiple reducer function for slice cart 

    Please read it from documentation or internet as well

14) In older redux ,redux itself used to say please don't mutate/change the state   

    reducers: {
        addItem : (state,action) => {
            //state.items.push(action.payload);  //in rtk you have to mutate and do not required to return but behind the scene it is actually doing the same which we mentioned below ,Redux used the immer library to do that ,you can read about that

            //older redux or vanilla redux we used to do like this ,mutation is not allowed and returning is manadatory

            const newState = [...state];
            newState.items.push(Action.payload);
            return newState 
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;     
        },
    }


    Also why we can't do something like this in clearCart : state = [] because it will give you a local variable state and changes in that variable only ,so it will not effect on your actual state or original state

    reducers: {
        addItem : (state,action) => {
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            console.log(state) //this will console the original state but it will give you proxy object ,so if you want to console the state ,you have to do current(state)

            console.log(current(state)) 
            state=[]
            console.log(state); //this you can see the log
            //state.items.length = 0;     
        },
    }


    Also you should know about RTK is that you can either return or mutate the state;;


    reducers: {
        addItem : (state,action) => {
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            return {item: []};
            //state.items.length = 0;     
        },
    }

15) We have ussed extension named redux dev tool for our application ,as it will provide you the logs for action and gives you a trace everything , you can even jump to diffeent states , 

16) Try to learn about RTK query - In older version we used to use middleware ,redux thungs , 

17) I have added one more feature to it:  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100),
    0
  ); 

  Reduce is use to caluclate total price of cart

18) Cors Code for cloudflare workers:

   /**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  const targetUrl=url.searchParams.get('url')

  if(!targetUrl){
    return new Response('Missing url query params',{status: 400});
  }

  const headers = new Headers(request.headers)
  headers.set('Content-Type','application/json');

  const targetRequest = new Request(targetUrl,{
    method: request.method,
    headers: headers,
    body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
  })

  try{
    const response= await fetch(targetRequest)

    const newHeaders = new Headers(response.headers)
    newHeaders.set('Access-Control-Allow-Origin','*')
    newHeaders.set('Access-Control-Allow-Methods','*') 
    newHeaders.set('Access-Control-Allow-Headers','Content-Type,Authorization')

    return new Response(response.body,{
      status: response.status,
      headers: newHeaders

    })
  }catch(err){
    return new Response('Problems while reaching the url',{status: 500});
  }
}