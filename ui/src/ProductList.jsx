import React from 'react';
// eslint-disable-next-line no-unused-vars
import URLSearchParams from 'url-search-params';

import ProductTable from './ProductTable.jsx';
import graphQLFetch from './graphQLFetch.js';
import Toast from './Toast.jsx';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalCount: 0,
      toastVisible: false,
      toastMessage: '',
      toastType: 'info',
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
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

    const data = await graphQLFetch(query, vars, this.showError);
    if (data) {
      this.setState({ products: data.productList });
    }

    const query2 = `query productTotalCounts{
      productTotalCounts
      }
    `;

    const data2 = await graphQLFetch(query2);
    // eslint-disable-next-line no-console
    console.log(data2.productTotalCounts);
    if (data) {
      this.setState({ totalCount: data2.productTotalCounts });
    } else {
      this.setState({ totalCount: 0 });
    }
  }


  async deleteProduct(index) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`;
    const { products } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { id } = products[index];
    const data = await graphQLFetch(query, { id }, this.showError);
    if (data && data.productDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.products];
        if (pathname === `/products/${id}`) {
          history.push({ pathname: '/products', search });
        }
        newList.splice(index, 1);
        return { products: newList };
      });
      this.showSuccess(`Product ${id} Deleted successfully`);
      this.listData();
    } else {
      this.listData();
    }
  }

  showSuccess(message) {
    this.setState({
      toastVisible: true, toastMessage: message, toastType: 'success',
    });
  }

  showError(message) {
    this.setState({
      toastVisible: true, toastMessage: message, toastType: 'danger',
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  render() {
    const { products } = this.state;
    const { totalCount } = this.state;
    const { toastVisible, toastType, toastMessage } = this.state;
    return (
      <React.Fragment>
        <div>
          Showing
          {' '}
          {totalCount}
          {' '}
          Available Products
        </div>
        <hr />
        <ProductTable
          products={products}
          deleteProduct={this.deleteProduct}
        />
        <br />
        <Toast
          showing={toastVisible}
          onDismiss={this.dismissToast}
          bsStyle={toastType}
        >
          {toastMessage}
        </Toast>
      </React.Fragment>
    );
  }
}
