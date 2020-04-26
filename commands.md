npm install --save-dev webpack@4 webpack-cli@3
npx webpack public/App.js --output public/app.bundle.js
npx webpack public/App.js --output public/app.bundle.js --mode development

npm install --save-dev babel-loader@8
npx webpack
npx webpack --watch

### Libraries Bundle

cd ui
npm install react@16 react-dom@16
npm install prop-types@15
npm install whatwg-fetch@3
npm install babel-polyfill@6

### Hot Module Replacement
```
cd ui
npm install --save-dev webpack-dev-middleware@3
npm install --save-dev webpack-hot-middleware@2

## Chapter 9: React Router

### Simple Routing
```
cd ui
npm install react-router-dom@4

Chapter 11: React-Bootstrap
### Installation
```
cd ui
npm install react-bootstrap@0
npm install bootstrap@3
ln -s ../node_modules/bootstrap/dist public/bootstrap
```

### Navigation Bar
```
cd ui
npm install react-router-bootstrap@0
```