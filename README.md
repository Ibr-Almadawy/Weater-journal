# Weather-Journal App Project

## Table of contents


- Weather Journal Project discription.
- Project files.
- HTML structure.
- css structure.
- package.json.
- Javascript files structure :
  1. Client side stracture:
     * Global variables.
     * Functions.
     * Events. 
  2. Server side structure:
     * Object variable.
     * Install packages:
       - express.js.
       - Middleware.
     * Initializing project folder.
     * Server setup.
     * Routes.
- Testing code.
- References.

## Weather Journal project discription:

This project perpose is to provide user with the weather of the selected city of USA by providing a zipcode and the application returns the temperature ,date ,users feelings and the city name by using Server side and client sides coding by using node.js and express.js techniques and a weather API provided by openweathermap.org.

## Project files:

This project consists of files:
1. HTML (index.html).
2. CSS (style.css).
3. js client side (app.js).
4. js server side (server.js).
5. Readme file (README.md).
6. My notes (My notes.txt).

## HTML structure:

Project has basic structure of html with one main <div> which carrys 4 <div> tags carry all the body content.

## CSS structure:

Project has also basic needed to run in a good apperance with the use of grid and successful use of **grid-auto-rows** property and **grid-template-columns** property.

## Package.json

Starting with install package.json in our project folder to see the confirmation of installing dependencies.

## js files structure:

### Client side structure:

   ##### Global variables:

   - **btn** variable assigned as a global variable to carry the DOM element with id of **generate** to be accessed in an event later.
   - **apiKey** variable assigned as a global variable to carry the API key.
   - **owmUrl** variable assigned as a global variable to carry the main URL for the host API website (openweathermap.org).
   - **month** variable assigned as a global variable to carry the name of the 12 months to use it to return the month name in the date using **getMonth()** method which return the index of the month.
   - **d** variable assigned as a global variable to carry new value of **Date()** method used to create date.
   - **newDate** variable assigned as global variable to carry the full date format by using **d** and **month** variable to return the full correct format.

   #### Functions:

   1. **getServerData** Client side 'GET' async function that perform the asyncronous steps to bring and access **projectData** object from the server to the client side to fill the generated data in it to use it later ,Using **fetch** method to fetch URL with **async** function with  **await**, **try** and **catch** techniques using get URL as a parameter.

   2. **fetchingAPI** client side asyncronous function by define **async** and access to **await** ,**try** and **catch** and used to fetch usingthe full API URL using the **fetch** method and **ownUrl** ,**apiKey** and zipcode stored in **zip** variable to return a weather data and store if in **loadedData** variable and store the needed values in this data in **projectData** object (sent as argument) recieved from sevrer , this function has 3 parameter url ,key and obj.

   3. **postToServer** client side 'POST' asyncronous function that used **async** definition and access to **await** ,**try** and **catch** using 2 parameter post **url** and the filled object **data** which returned from **fetchingAPI** function.

   4. **updateUI** client side asyncronous function that get back the data stored in object in the server side by make a 'GET' function using **async** ,**await** ,**catch** and **try** to get data back and update the user interface with this data to let user see it in the webpage ,All that is by store every value in the approperiate DOM element by using Dom techniques **getElementById** ,**querySelector** ,**.innerText** and **.innerHTML** and insure that if the zipcode isn't valid to return a message to the user 'Not valid zipcode'  using **if** condition and catch any error and report it in console ,finally the user can get the right data if right zipcode provided.

   5. **evntCallback** client side callback function to run the inner code asyncronously when the click event occurs with the **Generate** button ,Inside this function promise has been declared and this promise start to work with all previous functions asyncronously ,starting with **getServerData** to get the empty object from server ,then after completing this action **.then** will start to execute **fetchingAPI** to get the needed data from host website by fetching API full URL and store some of the returned data into the empty object ,then start to execute **postToServer** and **updateUI** functions to post the object from client side to server side ,And print in the user interface the stored data as a result.

   #### Events

   **click** event to the listen to the **btn** global variable which reflict the button of id **generate** ,this event has 2 argument ,first the type of event 'click' and the second is the callback function **evntCallback** to start to execute the insider promise processes when the button clicked to 'GET' ,fetch API ,'POST" ,update user interface with data.

### Server side structure

   #### object variable

   ***projectData** object declared in the top of the server side js file.

   #### Install packages

   ***express.js***

   Starting with install npm package *express.js* and require express.js in our server and create instance of express app.

   ***middleware***

   1. Installing **body-parser** npm package as a middleware and require body-parser in our server and start to use its methods by **.use** with **urlencoded** method and **json** method.

   2. Installing **cors** npm package as a middleware and require cors in our server and start to use it using **.use**.

   #### Initializing  project folder

   Using **.use** property to initalizing the main project folder **website** which containing **index.html** file and its combined files **style.css** and **app.js**.

   #### Server setup
   
   Starting by declare a variable **port** as a port to pass it as argument to the server setup by add **listen** method to the **app*** instance and pass its 2 parameter ,port and callback function which add a message to console that the server is running.

   #### Routes

   1. **'GET'** route to send the **projectData** object to the client side.

   2. **'POST'** route to get back the **projectData** object to our server which carry data needed from the API request data.

   3. **'GET'** route to send the **projectData** object to the client side again to update the user interface with the data stored in **projectData**. 

## Testing code 

Code tested with various USA zipcodes and return the results successfully without errors ,And tested over pass another string or number as a zipcode to test response to deal with errors and the output is in UI to tell user that code is invalid and print the error message which has been handeled in **catch**.

## References
  
  1. Udacity course matrial introduced by "Daniel Silber Backer".
  2. developer.mozilla.org
  3. W3schools.com
  





      






