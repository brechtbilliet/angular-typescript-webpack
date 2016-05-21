# angular-typescript-webpack

Angular + Typescript + Webpack build with Karma and wallaby tests support.
And this all with sourcemaps in production support!!

### Install

```sh
npm i webpack typings typescript -g
git clone git@github.com/brechtbilliet/angular-typescript-webpack.git
cd angular-typescript-webpack
npm install
npm start
```

Then it will automatically open the app in your browser

To run tests

```sh
npm test
```

Coverage

```sh
open reports/coverage/index.html
```

Build
```sh
npm install
npm run build
```


### Features

- [x] Build basic Angular app with webpack
- [x] Simple twitter application
- [x] fully tested with Jasmine
- [x] sass support
- [x] Coverage report
- [x] Typescript support
- [x] ES6 modules support
- [x] Running tests in PhantomJS
- [x] Wallaby.js support
- [x] Karma support
- [x] Optimized build package
- [x] Minimal and straightforward setup
- [x] Watches code and refreshes browser with latest changes automatically
- [x] Sourcemap support in develop AND PRODUCTION!!! (don't deploy the js.map file with your application, but use it to debug your production app)
