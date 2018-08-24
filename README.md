# Weather-App

Weather-App is a Single Page Application that uses [Dark Sky API](https://darksky.net/dev) and [Map Quest Geocoding API](https://developer.mapquest.com/documentation/). You can clone this repository locally or view the deployed version through netlify [here](https://weather-app-darksky.netlify.com/).

When you first pull up the application (locally or deployed) it will prompt you to share your location if you want it to retrieve your local weather **click allow on the prompt for the application to retrieve your location**. If you do share your location you'll get the high and low temperature for the current day and the four days that follow. After that you are also able to **search for a new location by City, State (i.e Washington,DC)**. If you do add a new City,State you have to **delete the City,State by using the "Delete Location" button before adding a new one**

## Running the project locally.

1. Clone the repo.
2. In the root directory type `yarn` or `npm i` to install the necessary dependencies.
3. After installing the necessary dependencies in the root directory type `yarn start` or `npm start`. This will make the application run on `localhost:3000`
