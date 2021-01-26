# Spaced Repetition Client

## Repositories
[Server Repo] (https://github.com/AngeloThinks/spaced-repetition-backend-capstone.git) 

[Client Repo] (https://github.com/AngeloThinks/spaced-repetition-frontend-capstone.git)

## Live Links
[Heroku Server] (https://vast-crag-51315.herokuapp.com)

[Vercel Deploy] (https://spaced-repetition-frontend-weld.vercel.app/login)

## Summary
This project uses spaced repetition to allow the user to create an account, learn a set number of Spanish words from a database, keep track of their score, and the number of times they've gotten a word correct and incorrect.

How to get started:
Click on Sign-up to register your username and password. Click on Sign-up once completed. The Sign up page will direct you back to the log-in page. From there you will use your newly created credentials, and enter them into the placeholders. Click on Log-in and you will be directed to the dashboard. 

## Technologies Used

### FrontEnd
- JavaScript
- React
- React-Router
- Context
- Cypress (testing)

### Backend
- NodeJs
- Express
- Knex
- CORS
- Chai, Mocha, supertest (testing)
- Frontend
- PostgreSQL


## Screenshots

<img width="1800" alt="login" src="img/login.png">

<img width="1800" alt="dashboard" src="img/signed-in.png">

<img width="1800" alt="question" src="img/question.png">

<img width="1800" alt="correct" src="img/correct.png">

<img width="1800" alt="incorrect" src="img/incorrect.png">


## API documentation

### POST '/api/auth'
Posting a login with a username and password, this endpoint will make sure they match and will create a json web token. *Note* Please click on sign up first, create your credentials, followed by clicking on login in order to go back to the login page.

### GET '/api/language/'
Endpoint will get the words for the user

### GET '/api/language/head'
Endpoint will get the word the user is learning next

### GET '/api/language/guess'
Endpoint will get the user's guess and compare it to the translation in the database

### POST '/api/user/
Endpoint will post a new user when signing up, only needing a Username, Name, and Password

## Tests

<img width="707" alt="Screen Shot 2021-01-12 at 2 21 16 PM" src="https://user-images.githubusercontent.com/67432727/104367807-4f54c200-54e9-11eb-8701-3a6b59a46fc6.png">
