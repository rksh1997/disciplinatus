# Disciplinatus
Dead simple todo app.

## Requirements
- Node.js

## Installation
1. clone the repository.
2. install dependencies by executing `yarn install` or `npm i` in the project's root directory.


## Development
- start api by executing `yarn start:api` or `npm run start:api` in the project's root directory.
- start frontned server by executing `yarn start:front` or `npm run start:front` in the project's root directory.front

Success case: you are able to visit `http://localhost:4200/` and start using the app.

> Note: You may need to install Nx.dev cli globally or to use npx.

## Environment Variables
| Name          | Description                  | Example                                   |
| ------------- | ---------------------------- | ----------------------------------------- |
| PORT          | which port to run the api on | 7000                                      |
| DATABASE_URL  | mongodb url                  | `mongodb://localhost:27017/disciplinatus` |
| DATABASE_NAME | database name                | `disciplinatus`                           |

> Note: frontend api url is hard coded in `apps/frontend/src/app/constants.ts`. If you change backend port, change it in here too.