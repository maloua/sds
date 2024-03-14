# surf-design-system

Design System for [https://design.surf.nl/](https://design.surf.nl/)

## Using this package in your React project

Install this package with `npm` into your own project:
```shell
npm install @maloua/sds
```
or using `yarn`
```shell
yarn add @maloua/sds
```
Import the global sds.css, the overrides for this library and the react-tooltip css in your index.js:
```js
import '@maloua/sds/styles/sds.css';
//Do not change the order of @maloua.sds style imports
import '@maloua/sds/cjs/index.css';
import 'react-tooltip/dist/react-tooltip.css';
```
For 
Import the component's you want to use:
```js
import {LanguageSwitcher, Tooltip, Alert} from "@maloua/sds";
```
You can then render the `LanguageSwitcher` component like any other React component in JSX.

Don't forget to choose and set the color palette on the body:
```
<body id="app" class="sds--color-palette--orange">
```

## Contributing
Create an issue and subsequently clone this repo and create a PR including storybook stories in this repo
with preferably squished commits.

### Storybook

To generate and run the Storybook
```
npm run build-storybook
npm run storybook
```

### Publishing

Increment the version in `package.json` and run the following commands:
```
npm install
npm run build
npm login
npm publish --access public ./dist
```
The package is published on https://www.npmjs.com/package/@maloua/sds and is deployed to https://maloua.github.io/sds
