import React from 'react';

import ProductFilter from './ProductFilter.jsx';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import graphQLFetch from './graphQLFetch.js';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
  }


  componentDidMount() {
    // call to listData so that data is displayed in the list even after the page is refreshed
    this.listData();
  }

  async listData() {
    const query = `query {
            productList {
              id category pname price imageUrl
            }
          }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }


  async createProduct(product) {
    const query = `mutation productAdd($product: ProductInputs!){
              productAdd(product: $product){
                  id
              }
          }`;

    const data = await graphQLFetch(query, { product });
    if (data) {
      this.listData();
    }
  }


  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <ProductFilter />
        <div>Showing all available products</div>
        <hr />
        <ProductTable products={products} />
        <br />
        <div> Add a new product to the inventory </div>
        <hr />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}
