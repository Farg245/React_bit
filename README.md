
## Quick Start guide

In the project directory,  run:

### `npm run installer`
This  will get the packages and node modules installed for both the front-end react app and the back-end express part of the app. It wil also start-up the back-end part of the app running  in port 9130, you can access the app now through the https://friendly-salamander-94ca67.netlify.app/ OR you can get up the front end running locally following the next step.


### Open a second terminal window and run `npm start` in the root folder.
This will get the react app running in port 3000.

You can now access the app in localhost http://localhost:3000/ . 

Warning! Due to the limited api calls from the coingecko api ,after really extensive use over a short period of time( mainly when getting coin-specific details) the app might give an axios error 500. I have impemented a cache memory solution in the back-end to limit the axios calls, however when fetching many DIFFERENT coin details over a short period of time the app can still give that error.


In order for the app to work you have to have nodejs enviroment installed in your computer.