1) Single Responsibilty Principle means you split your component so that it is more readable and less bulky ,make your components testable and easy to debug

2) As you know that ReactHooks is nothing just a super powerfull js function ,so you can create your own custom hook ,but make sure to use "use" as prefix for you custom hook name ,so that react will understand it is react hook.

3) We have made two custome hook : one for fetching menu ,second is to check online status of user

4) Caller is the one where your hook is being used.

5) If you want to test the onlinestatus hook ,no need to diable interent ,browser just provides this features to disconnect internet using dev console ,inside network section ,by default no throttling is selcted.

6) If you not follow naming convention like use prefix for custom hook, Capital initial for components ,becuase linter will throw you error. (eslinter -read about it).It is recomended to follow these conventions.

7) Ever heard about LazyLoading,Dynamic Import,On demand loading,Chunking,Code Splitting,Dynamic Bundling .

8) Suspense(Component) ,Fallback is used for lazy loading.

9) Remember in second episode ,we talked about parcel ,parcel is basically a bundler (it is doing a lot of things other than bundling),but what does it mean when we talk about bundling , bundling means it will bundle together all your files into one js file inside (dist) folder of you application.You can check that file in your browser as well inside network tab,Your js files size depends on how many components you have in that bundle.

10) Now what is the solution? putting all components in each separate js file is also not feasible (as browser needs to call 1000 times to fetch file )and putting all component in one js file is also not benfit . Solution is we will make smaller bundles of components.This process is known as Code Splitting,Dynamic bundling,dynamic import ,Lazy Loading , Code chunking ,onDemand loading


11) Why we are doing this because while scaling or for bigger applications where your whole components get bundled together in single js file will lead to bigger size ,so for splitting your bundles to more than one ,you have to use this lazy function .

12) Let' suppose we have also making grocery items store inside our app which also have a lot of componnents ,you can use this Code splitting concept over here and try to make a different jss for this or you can say bundle for this.

    - Steps :

        - First make a normal nav bar for it in header section.
        - Enable routing for this in App.js
        - And we only want to load that bundle when required(i.e when click on grocery) using lazy function(given by react ,named export required).
            import {lazy} from "react";

            const Grocery = lazy(()=>import("path of grocery component"));

        - Now you see your js bundles are different for grocery and it will load only when you click on grocery.

        -But you still you got some error (suspending the rendering)on browser ,becuase meanwhile it redirects to groccerypage ,the bundle will take some time to load ,but react is superfast and it will not able to find the components to render as file is not being fetched at that point of time.

        -React will give a component name "Suspense" to handle the above situation.

            -Wrap your component inside Suspense component.
                <Suspense><InstaGrocery/></Suspense>

        -The error is handled but meanwhile that component will load ,we can show some loading or component.

            -We can use placeholder named fallback for this inside suspension .


        - 
