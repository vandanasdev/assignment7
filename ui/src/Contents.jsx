import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductList from './ProductList.jsx';
import ProductImageDisplay from './ProductImageDisplay.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/products" />
      <Route path="/products" component={ProductList} />
      <Route path="/imagedisplay/:imageUrl" component={ProductImageDisplay} />
      <Route component={NotFound} />
    </Switch>
  );
}
