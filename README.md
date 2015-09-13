# angular-typescript-webpack

This is Brecht Billiet his architecture to combine typescript, webpack and angular 1.X

Unittests will be added in the near future

## How to run:
type npm install

type npm install tsd -g

type tsd install

type npm start

Change package.json for Windows

 "scripts": {
 
    "build": "set NODE_ENV=dev && webpack --config webpack.build.js --bail -p --color",
    
    "start": "set NODE_ENV=dev && webpack --config webpack.dev.js --watch",
    
    "test": "set NODE_ENV=test&& karma start",
    
    "test:live": "set NODE_ENV=test&& karma start --auto-watch --no-single-run"
    
  },
