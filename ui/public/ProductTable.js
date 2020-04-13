"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductTable;

/* eslint-disable react/jsx-no-target-blank */

/* globals React */
function ProductRow(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, product.pname), /*#__PURE__*/React.createElement("td", null, "$".concat(product.price)), /*#__PURE__*/React.createElement("td", null, product.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: product.imageUrl
  }, "View")));
}

function ProductTable(_ref2) {
  var products = _ref2.products;
  // eslint-disable-next-line react/destructuring-assignment
  var productRows = products.map(function (product) {
    return /*#__PURE__*/React.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRows));
}