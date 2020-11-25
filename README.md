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

- GET

| Requête              | Réponse                       |
|:----------------------|:----------------------------------|
| `/users`      | retourne la liste de tous les utilisateurs inscrits
| `/users/{username}`    | retourne les informations concernant l'utilisateur spécifié

- POST

| Requête               | Données à envoyées              | Réponse                       |
|:--------------------|:--------------------|:----------------------------------|
| `/users/search`      | {"username" : "toto42"} | retourne la listes des utilisateurs dont l'username commence par "toto42"
| `/authent/signup`      | {"name": "Toto","lastname": "Bateau","username": "tBateau","password": "T@Bateau9","confirm": "T@Bateau9", "private": true //posts can only be viewed by friend} | Succès si les informations ne sont pas éronnés
| `/users/signin`      | {"username" : "toto42", "password": "ROT13"} | Succès si les informations ne sont pas éronnés
| `/post/add`         | {"username": "toto42"} | Retourne les posts crées par "toto42"
| `/post/add`          | {file": "myPicture.png"} | Succès si les informations ne sont pas éronnés
```

## Commande / Installation

```node
npm install
npm run start
npm run dev
```

## Author
Xavier Nouaille, 2020
