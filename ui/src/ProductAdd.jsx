/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.ProductAdd;
    const priceValue = (form.price.value).slice(1);
    const product = {
      category: form.category.value, price: priceValue, pname: form.pname.value, imageUrl: form.imageUrl.value,
    };
      // eslint-disable-next-line react/destructuring-assignment
    this.props.createProduct(product);
    form.price.value = '$'; form.pname.value = ''; form.imageUrl.value = ''; form.category.value = '';
  }

  render() {
    return (
      <Form name="ProductAdd" onSubmit={this.handleSubmit}>
        <section className="grid-1">
          <div>
            <label>Category </label>
            <select id="category">
              <option disabled selected value=""> -- Select a product -- </option>
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Jackets">Jackets</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Accessories">Accesories</option>
            </select>
          </div>
          <div id="price">
            <label>Price Per Unit</label>
            <input type="text" name="price" defaultValue="$" />
          </div>
          <div>
            <label>Product Name </label>
            <input type="text" name="pname" />
          </div>
          <div>
            <label>Image URL </label>
            <input type="text" name="imageUrl" />
          </div>
          <button type="submit" className="butn"> Add Product</button>
        </section>

      </Form>
    );
  }
}
