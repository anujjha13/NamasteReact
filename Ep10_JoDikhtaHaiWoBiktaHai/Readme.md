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

9) Lifting State Up is the concept which will work over here so the code which we have done will require some changes ,firstly we will change each category have its own statevariable to show to give the responisibility to its parent. and then will provide the function to set its value to its child.

10) This is what we called Controlled or uncontrolled component , uncontrolled component is called what we have earlier used ,controller component is the component what we will going to use (basically the parent is controlling the child is known as controlled components)

11) I have added the above functionality the difficulties i faced while building is first when passing more than 1 paramter you should destructure it on fly ,otherwise do separetly ,you will not get directly the value ,as you know in js everything is object so ,that boolean also becomes object so you need to destructure it.

12)
