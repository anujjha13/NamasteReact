1- We not only use react using npm install ,but also we can inject react in pre -existing html code just like we use script tag for including any js file or library, since react is also a js library so we can do that as well.

2- We have implement on second.html file ,how we can use external file to write separate js code and link with html file.

3- Now we will try to make nested html element in nestedtags.js file and third.html page

4- Now we will try to make sibling html element in sibingtags.js file and fourth.html page

5- Is order matter of script tag in html file : Yes if you try to use any React component in script.js file and put those script file above React script file.
    ❌ Incorrect order (React is not loaded before usage)
    <script src="script.js"></script>  <!-- script.js tries to use React but React is not loaded yet -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    ✅ Correct order (React is loaded first)
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="script.js"></script>  <!-- script.js can now use React -->

6-What if there is some html tags already present inside root ,then on root.render it will replace by the 
    tag which is being render to root.

7- If i use cross origin attribute in my own script file it is causing issue and not load in htmlpage {<script crossorigin src="siblingtag1.js"></script>}

8- CORS: 
    - Initially we are not allowed to share resource from one origin to another ,not
        even in b/w different protocol (https://anujdev.in | http://anujdev.in) or in b/w different ports (anujdev.in | anujdev.in:5050) or in between different domain(anujdev.in | google.com/api)

    - But Cors do it for us ,first process is Preflight call (also known as Options  call) 
            |----------|                    |----------|
            |          |-> preflight    ->  |          |
            |          |                    |          |
            |  Origin1 |<- Options     <-   |  Origin2 |
            |          |  (Additional http) |          |
            |          |                    |          |
            |__________|   ->Post Request   |__________|
           
    - Main additional http: 
        ->Access -Control - Allow - Origin - (*) ->*means any domain can acces it,Public Api's
        ->Access - Control - Allow - Methods - (get,post ,put ,delete) -> which method you are allowed to 

    - Is every request follow this Preflight call :No we have two type of access control mechanism
        ->Simple Request call
        ->Preflight Request call

    - Sometimes when using dfferent resources from different domain ,we'll say it's a CORS error,but actual we are making few mistakes while not following the mechanims

    - We can use some extension to bypass the web secuirty to avoid any cors error


9- REACT LIBRARY VS FRAMEWORK :
    ->React is library not a framework because it can be used inside your smallest section to largen section 
        independently not required to use it every part of yoru application :Ex: Only in root or any div
    
    ->It is just a js code when go to that link of script tag:
        https://unpkg.com/react@18/umd/react.development.js

10- 
