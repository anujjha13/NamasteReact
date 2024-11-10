1- NPM is not Node package manager (many developer will say it is this) ,just visit this site(npmjs.com),it is a standard repository for all the packages ,any project you need to inlcude in your project is present in that repository,and npm manages those packages for your app.

2- npm init can be used to use npm in your project,it will ask few questions from you to give it a name like package.

3- This npm init will create a package.json file for your application which is nothing but a configuration file for npm. 

4- Packages and dependencies is more or less same.

5- When you want to make your code ready for production ,you want your code minified,compressed,optimised,cleaned which is done by bundler ,

6- What is Bundler : Webpack ,parcel ,vite.
    Role : it packages or bundles your app to shipped into production

7- When you use create-react-app ,it will be using bundler named webpack

8- We gonna use parcel as bundler in this episode

9- npm install parcel(package_name) vs npm install -D parcel(package_name) ,when you do -D ,then your package will come to devdependencies section in package.json ,also you will get one more file package-lock.json

10- Caret and Tilde (^ and ~ ) 
    - Let's suppose currently parcel version is 2.8.3 and you have used caret(^) as prefix in version , if in future there is any minor upgrade available it will automatically jumps to that minor version and use it,
    but if you are using tilde(~) then  only major version if available can be used .

    - It's always safe to use caret over tilde as major version may come with lot of issues.

    -https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

        -> ~version “Approximately equivalent to version”, will automatically update you to all future patch versions that are backwards-compatible, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

        -> ^version “Compatible with version”, will automatically update you to all future minor/patch versions that are backwards-compatible, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.

11- Difference between package.json and package-lock.json :

    -> package.json keeps the track of approximate version of each dependencies.
    -> package-lock.json keeps the track of exact version of each dependencies.
    -> This is to avoid any discrepencies that code is working on local but not on production
    -> what does this integrity term used in package-lock.json
        ->In the package-lock.json file, the "integrity" field is a security measure that ensures the integrity and authenticity of the package contents.
        ->This hash is generated when the package is first installed, typically using SHA-512 or SHA-1 algorithms, and is used to verify that the package hasn’t been tampered with.
        ->When you or another developer install dependencies, the package manager checks this hash against the downloaded package to confirm its authenticity. If the hashes don’t match, it means the package might have been altered or corrupted, and the package manager will raise an error.

12- What is Node Modules:

    ->  This folder is being created or updated whenever there is any dependencies installed in your apps
    ->  And it will install files for that particular dependencies and also all dependencies which is dependent on it and so on ,that's the reason why node_modules folder has lot of dependencies
    ->  This is known as Transitive dependencies.
            ->X is installed ,X dependent on Y ,Y dependent on Z.
            ->So node_modules file contains dependencies of X,Y & Z.
    ->  As you installed parcel , it comes under dev dependencies of your application package.json,
        Similarly if you see the parcel folder inside node_modules ,you will see parcel's package.json files
        as well in which it's dependecies are mentioned.
    ->  It is collection of all dependencies

13- Should i put those node_modules files on production or git :
    -> The answer is no , you shouldn't and how to do that is to put that node_modules in .gitignore file
