"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductTable;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-no-target-blank */
function ProductRow(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, product.pname), /*#__PURE__*/_react.default.createElement("td", null, "$".concat(product.price)), /*#__PURE__*/_react.default.createElement("td", null, product.category), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/#/imagedisplay/".concat(product.imageUrl)
  }, "View")));
}

function ProductTable(_ref2) {
  var products = _ref2.products;
  // eslint-disable-next-line react/destructuring-assignment
  var productRows = products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Product Name"), /*#__PURE__*/_react.default.createElement("th", null, "Price"), /*#__PURE__*/_react.default.createElement("th", null, "Category"), /*#__PURE__*/_react.default.createElement("th", null, "Image"))), /*#__PURE__*/_react.default.createElement("tbody", null, productRows));
}