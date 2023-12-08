# GameHive

## [See the App!](https://gamehive.netlify.app/)

## Description

GameHive is a leading platform that offers an exciting board game forum, providing board game enthusiasts an interactive space to connect and share their experiences.

#### [Client Repo here](www.your-github-url-here.com)
#### [Server Repo here](www.your-github-url-here.com)

## Backlog Functionalities

**NOTE -** List here all functionalities you wish to add to your proyect later or you are currently working on

## Technologies used

All technologies used in the project: HTML, CSS, Javascript, React, axios, React Context.

# Server Structure

## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true, lowercase: true, trim: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    password: {type: String, required: true},
    image: String,
    favgames: String,
    role: String,
}
```

Game model

```javascript
 {
   name: {type: String, required: true, unique: true, trim: true},
  description: String,
  company: String,
  category: String,
  players: String,
  age: String,
  image: String,
  tutorial: String,
 }
```

Comment model

```javascript
{
  user: String,
  comment: String,
  game: String,
}
```

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                    |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | -------------------------------------------------------------- |
| POST        | `/auth/signup`              | {name, email, password}      | 201            | 400          | Registers the user in the Database                             |
| POST        | `/auth/login`               | {username, password}         | 200            | 400          | Validates credentials, creates and sends Token                 |
| GET         | `/auth/verify`              |                              | 200            | 401          | Verifies the user Token                                        |
| GET         | `/`                         |                              | 200            | 400          | Show games in the DB, only titles and images                   |
| POST        | `/addgame`                  | {apiId}                      | 201            | 400          | Creates a new Game Document                                    |
| GET         | `/:gameId`                  |                              | 200            | 400, 401     | Sends all game Details                                         |
| PUT         | `/:gameId`                  |                              | 200            | 400, 401     | Edits game document                                            |
| DELETE      | `/:gameId`                  |                              | 200            | 401          | Deletes game document                                          |
| GET         | `/addComment`               |                              | 200            | 401          | Show comments in the DB                                        |
| POST        | `/addComment`               |                              | 200            | 401          | Deletes comments document                                      |

  
## Links

### Project

[Repository Link Client](https://github.com/Sonx96/GameHive-Client.git)

[Repository Link Server](https://github.com/Sonx96/GameHive-Server.git)

[Deploy Link](https://gamehive.netlify.app/)

### Excalidraw

[Excalidraw](https://excalidraw.com/#room=dec1574385513dc31843,GlKTHkObjnWvJIB2Ln5Syg)

### Slides

[Slides Link](www.your-slides-url-here.com)