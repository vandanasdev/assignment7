class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    return React.createElement("tr", null, React.createElement("td", null, product.pname), React.createElement("td", null, "$" + product.price), React.createElement("td", null, product.category), React.createElement("td", null, React.createElement("a", {
      target: "_blank",
      href: product.imageUrl
    }, "View")));
  }

}

class ProductTable extends React.Component {
  render() {
    const productRows = this.props.products.map(product => React.createElement(ProductRow, {
      key: product.id,
      product: product
    }));
    return React.createElement("table", {
      className: "bordered-table"
    }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, productRows));
  }

}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.ProductAdd;
    const priceValue = form.price.value.slice(1);
    const product = {
      category: form.category.value,
      price: priceValue,
      pname: form.pname.value,
      imageUrl: form.imageUrl.value
    };
    this.props.createProduct(product);
    form.price.value = "$";
    form.pname.value = "";
    form.imageUrl.value = "";
    form.category.value = "";
  }

  render() {
    return React.createElement("form", {
      name: "ProductAdd",
      onSubmit: this.handleSubmit
    }, React.createElement("section", {
      className: "grid-1"
    }, React.createElement("div", null, React.createElement("label", null, "Category "), React.createElement("select", {
      id: "category"
    }, React.createElement("option", {
      disabled: true,
      selected: true,
      value: ""
    }, " -- Select a product -- "), React.createElement("option", {
      value: "Shirts"
    }, "Shirts"), React.createElement("option", {
      value: "Jeans"
    }, "Jeans"), React.createElement("option", {
      value: "Jackets"
    }, "Jackets"), React.createElement("option", {
      value: "Sweaters"
    }, "Sweaters"), React.createElement("option", {
      value: "Accessories"
    }, "Accesories"))), React.createElement("div", {
      id: "price"
    }, React.createElement("label", null, "Price Per Unit"), React.createElement("input", {
      type: "text",
      name: "price",
      defaultValue: "$"
    })), React.createElement("div", null, React.createElement("label", null, "Product Name "), React.createElement("input", {
      type: "text",
      name: "pname"
    })), React.createElement("div", null, React.createElement("label", null, "Image URL "), React.createElement("input", {
      type: "text",
      name: "imageUrl"
    })), React.createElement("button", {
      type: "submit",
      className: "butn"
    }, " Add Product")));
  }

}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
          productList {
            id category pname price imageUrl
          }
        }`;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const result = await response.json();
    this.setState({
      products: result.data.productList
    });
  }

  async createProduct(product) {
    const query = `mutation productAdd($product: ProductInputs!){
            productAdd(product: $product){
                id
            }
        }`;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          product
        }
      })
    });
    this.loadData();
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement("div", null, "Showing all available products"), React.createElement("hr", null), React.createElement(ProductTable, {
      products: this.state.products
    }), React.createElement("br", null), React.createElement("div", null, " Add a new product to the inventory "), React.createElement("hr", null), React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

const element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('myCompInventory'));