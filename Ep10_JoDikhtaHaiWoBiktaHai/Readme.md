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
        - px - padding on x axis
        -

    You can search of any style you want in tailwindcss website ,but this is little bit tedious task for us ,so we have an extension also which helps us ,but try to use it in intial days from tailwind site .And the best part is you can hover on your written css property to get to know what actual css is applying.
