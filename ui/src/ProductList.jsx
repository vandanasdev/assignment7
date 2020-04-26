import React from 'react';
// eslint-disable-next-line no-unused-vars
import URLSearchParams from 'url-search-params';

import ProductFilter from './ProductFilter.jsx';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import graphQLFetch from './graphQLFetch.js';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }


  componentDidMount() {
    // call to listData so that data is displayed in the list even after the page is refreshed
    this.listData();
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.listData();
    }
  }

  async listData() {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    const vars = {};
    if (params.get('status')) vars.status = params.get('status');

    const query = `query {
            productList {
              id category pname price imageUrl
            }
          }`;

    const data = await graphQLFetch(query, vars);
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

  async deleteProduct(index) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`;
    const { products } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { id } = products[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.productDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.products];
        if (pathname === `/products/${id}`) {
          history.push({ pathname: '/products', search });
        }
        newList.splice(index, 1);
        return { products: newList };
      });
      // eslint-disable-next-line no-alert
      alert('Product Deleted successfully');
    } else {
      this.listData();
    }
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <ProductFilter />
        <div>Showing all available products</div>
        <hr />
        <ProductTable
          products={products}
          deleteProduct={this.deleteProduct}
        />
        <br />
        <div> Add a new product to the inventory </div>
        <hr />
        <ProductAdd createProduct={this.createProduct} />
        <hr />
      </React.Fragment>
    );
  }
}
