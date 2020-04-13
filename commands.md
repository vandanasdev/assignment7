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