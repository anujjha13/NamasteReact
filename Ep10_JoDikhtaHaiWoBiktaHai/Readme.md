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