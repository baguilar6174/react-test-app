# Jest and React Testing Library + React + Vite

This app contains the Jest and React Testing Library configuration for a React application created with Vite.

## Create a React application with Vite

```bash
yarn create vite or
npm create vite@latest
```

## To run the app

```bash
cd <your-app>
yarn
yarn run dev
```

🚧 [Extension](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) for VS Code

## Install libraries and dependencies

```bash
yarn add --dev jest @types/jest babel-jest @babel/core @babel/preset-env isomorphic-fetch @testing-library/react jest-environment-jsdom @babel/preset-react
```

🚧 We should need to use [React testing library](https://testing-library.com/docs/react-testing-library/intro) to test DOM elements.

## Edit package.json

```json
...
"scripts": {
	"dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "jest --watchAll"
},
...
```

## Create a **babel.config.cjs** file in the root project

```bash
module.exports = {
	presets: [
    [ "@babel/preset-env", { targets: { esmodules: true, node: "current" } } ],
    [ "@babel/preset-react", { runtime: 'automatic' } ],
  ],
};
```

## Create a **jest.config.js** file in the root project

```jsx
export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js']
}
```

## Create a **jest.setup.js** file in the root project

```jsx
import 'isomorphic-fetch'
```

🚧 This configuration allows testing fetch method, if you have a node ≥ 18, you don’t need this configurations

## To run tests

```bash
yarn run test
```