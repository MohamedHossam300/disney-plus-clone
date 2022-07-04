# Disney Plus Clone

## Setting Up

### Frontend

- `npm i` or `yarn`
- `npm run start` or `yarn start`

start on port`3000`

### Backend

- `npm i` or `yarn`
- create an `.env` file that has this keys

|       keys      |                  values                 |
| --------------- | --------------------------------------- |
|    MONGO_URL    |   "mongodb://localhost:27017/`dbName`"  |
|   SALT_ROUNDS   |                 ex. `10`                |
|      PEPPER     |        ex. `"this-is-a-pepper"`         |
| BCRYPT_PASSWORD | ex.`"speak-friend-from-the-other-side"` |
|  TOKEN_SECRET   |          ex. `"alohomora123!"`          |

- using `mongoDBCompose` or another tool that you manage with it mongodb
    set movies data to be like this

ex.
```
  "collectionId": "1",
  "cardImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5rzzYp9wtx8W-khbUb_9BJhXjXDv9kqi8Q&usqp=CAU",
  "title": "bao",
  "subTitle": "2018 • 7m • Family, Fantasy, Kids, Animation",
  "titleImage": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78",
  "description": "A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",
  "backgroundImage": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
```

you shuld put for all shelf only 4 films to be like this image

![example for shelfs/ collection](moviesCollections.png)

to run
`npm run start` or `yarn start`

start on port`8080`

## Tools

### Frontend Tools

React, Redux, React Router, Redux Toolkit, styled components

### Backend Tools

Typescript, express, bcrypt, mongoose

## Details

this is a frontend project using React, Redux that connected with a simple Backend that fetch movies data from database, Signup and auth.
