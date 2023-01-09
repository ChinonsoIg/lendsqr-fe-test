# Lendsqr Frontend Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using Typescript flag.\
The styling is done with Sass.\
It was built as an assessment for Lendsqr.

## Getting Started

To run the project, clone it by clicking on the clone button on your github dashboard. The URL is copied to your clipboard. Go to a desired folder in your local machine. Open your terminal on that folder. Paste the URL and run `git clone`. The project is automatically downloaded on your local machine. Navigate to the project folder by running on your terminal `cd lendsqr-fe-test`. Then, run `npm install` to install all the packages used for this project. After that, run `npm start`. The project should open a page automatically on your browser, otherwise, open your browser and go to [http://localhost:3000](http://localhost:3000), you should see the project live.\
Alternatively, you can decide to download the project as a zip folder. Once downloaded, unzip the folder, and open your terminal on the folder. Run `npm install`, and finish up the process as narrated above.

## Available Scripts
### `npm start`

Runs the app in the development mode.\
It will automatically open your browser on [http://localhost:3000](http://localhost:3000). But if this does not happen, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Whenever changes are made on the code, the page will reload.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## The Live App

The application consists on 3pages.\
The first page is a Login page - Click on the `LOG IN` button to log into the users dashboard. If you wish to see the password as you type, click on `SHOW`.\

The second page is the users dashboard - Displays names, emails, etc of users. To see details of a particular user, click on the three dots on the right hand side of the table, you will see a dropdown. Then click the `view details`. You will be taken to a user details page. You can click on the filter by the side of the header of each column. You will see a form to input the search terms.\
On the bottom of the table, you can select how many users you want to display per page. You can also navigate to other pages using the pagination button.\

The third page is the user details page - You will see other details of the user, like education, account balance, etc.\


This application is hosted on vercel.\
You can view it live [here](https://ojoechemchinonso-lendsqr-fe-test.vercel.app).
