This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Literature
Front-end implementation of the famous card game! This repo will also serve as an example for custom configuration of build tools like babel, webpack etc. This is an ejected repo (oops!)

This project uses the following tools (plugins & libraries) with custom configurations.

- Webpack
- Babel
- Eslint
- Prettier
- husky & lint-staged
- Tailwind CSS
- JSX control Statements
- React-router-dom
- Chokidar
- Concurrently
- Hero patterns
- Hero Icons

## Available Scripts

In the project directory, you can run:

### `yarn lint`

Command to run linting across files
config > eslint.config.js

### `yarn prettier:fix`

Command to run prettier across files
config > prettier.config.js

### `yarn start:all`

* Note: if this fails to reflect applied css styles, try running yarn build:css first and then yarn start:all

Concurrently calls yarn watch:css, yarn build:css and yarn start.

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn watch:css`

watches css file for changes to generate new index.css file

### `yarn build:css`

Builds and generates the css classes used by tailwind CSS

### `yarn prebuild`

Runs yarn build:css as a pre step to yarn build

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Thank you Open Source!