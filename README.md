# OMDB React client

## About
**OMDB React client** is an api client to access OMDB api. The client was developed using React, Redux, Redux-Saga,
styled components and TypeScript. The main focus was done on usage only functional React components and
[React Hooks](https://reactjs.org/docs/hooks-intro.html). On top of that the project was structured in such way that
allows it add more features and extend it easily.

## Features

The feature set is limited only by searching movie by movie title but a feature set can be extended in the nearest future.

## Demo
The [demo](https://mpalenov.github.io/search-movies-react-hooks) is deployed on github pages. If you want to run it locally
you need to do the following steps:

- Clone this repository
- Install scripts by running `npm i`
- Build the application by running `npm run build`
- Open `dist/index.html` at your web browser

## How to Start Dev Server
- Clone this repository
- Execute `cd search-movies-react-hooks/` to enter app working directory
- Execute `npm install` to install app dependencies
- Execute `npm start`
- Browser's page will be opened automatically or you can visit `http://localhost:3000` to view this app

## API key
To access OMDB API you need an API key before you run Dev Server or build the application. You can get it at the
official [web site](http://www.omdbapi.com/). To set that key set an environment variable, for example you can do that
in Bash like that `export REACT_APP_API_KEY="{YOUR_KEY}"`.

## License
OMDB React client is licensed under the MIT License - see the LICENSE file for details
