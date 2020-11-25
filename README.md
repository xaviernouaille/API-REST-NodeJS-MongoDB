# API-REST-NodeJS-MongoDB
Une API REST permettant de s'inscrire, se connecter, rechercher des utilisateurs et visionner leurs posts 

## Technologies utilisées
NodeJS & ExpressJS

## Modules utilisés
```json
    "bcrypt": "^5.0.0",
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.10.9"
```

## Routes

```node
GET all users
GET: /users

GET a specific user
GET: /users/:username

POST search user by username
POST: /users/search
  {
    "username": "mbaguelin"
  }

POST signup
POST: /authent/signup
  {
    "name": "Toto",
    "lastname": "Bateau",
    "username": "tBateau",
    "password": "T@Bateau9",
    "confirm": "T@Bateau9",
    "private": true //posts can only be viewed by friends
  }

POST signin
POST: /authent/signin
  {
  "username": "Toto"
  "password": "T@Bateau9"
  }

POST new POST
POST: /post/add
  {
  "file": "test"
  }

GET all Posts of a user
GET: /post
  {
  "username": "tBateau"
  }
```

## Commande / Installation

```node
npm install
npm run start
npm run dev
```

## Author
Xavier Nouaille, 2020
