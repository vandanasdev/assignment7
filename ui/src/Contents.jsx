import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductList from './ProductList.jsx';
import ProductImageDisplay from './ProductImageDisplay.jsx';
import ProductEdit from './ProductEdit.jsx';
import ProductReport from './ProductReport.jsx';


const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/products" />
      <Route path="/products" component={ProductList} />
      <Route path="/report" component={ProductReport} />
      <Route path="/edit/:id" component={ProductEdit} />
      <Route path="/imagedisplay/:imageUrl" component={ProductImageDisplay} />
      <Route component={NotFound} />
    </Switch>
  );
}
