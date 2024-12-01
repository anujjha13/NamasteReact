1) Monolithic : This architecture is basically when your all services like Backend,Frontend,DBconnectivity,SMS,Authentication all are tightly coupled ,so if you want to make any small change in any of the service you have to redeploy the whole application (bulk code)

2) Microservice :In this architecture we have lossely coupled services although they have communication with each other which is obviously the need but if you want to make any changes in one of services you don't need to redeploy the whole code ,you just have to deploy the service in which you have done the changes.In this every service are independent.And what's the best part is your each service can have different languages, and they can interact with each other.

3) Now question is how they will interact with each other :
    -Using different port and domain name

4) There are two ways to load the API Data:

    - Load -> API(500ms) -> Render (IN this user will face the screen froze till the Api loads data)

    - Load -> Render -> API -> Render (Ofcourse in this we are using extra render but it also gives you better UX (User Experience))

    So second one is better way

5) Hooks as we already discussed is nothing just a JS function which react provides us to use in some specific requirement.

6) UseEffect is also one of the most used hook in React :

    Syntax:
        -useEffect()-> why() since it is js function and have to pass 2 argument in it ,first one is the callback function and second one is Dependecny array.

        useEffect(()=>{
            console.log("Callback called")
        },[]);

    Note : This UseEffect will be executed after your component renders so if you have put debugger in your component tag and in callback function like console.log you will see ,first rendering of components will occur and then console log printed.

    So why we are talking about it because useEffect will help  us in the second way of calling api data
    
7) FETCH is function provided by browser not by js or react ,it will return a promise so you can use.then method or use async await.

8) Now we got rid of mock data and we are fetching live data from API





