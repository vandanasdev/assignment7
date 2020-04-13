"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductTable;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-no-target-blank */
var ProductRow = (0, _reactRouterDom.withRouter)(function (_ref) {
  var product = _ref.product,
      search = _ref.location.search,
      deleteProduct = _ref.deleteProduct,
      index = _ref.index;
  // eslint-disable-next-line no-unused-vars
  var selectLocation = {
    pathname: "/products/".concat(product.id),
    search: search
  };
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, product.pname), /*#__PURE__*/_react.default.createElement("td", null, "$".concat(product.price)), /*#__PURE__*/_react.default.createElement("td", null, product.category), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/#/imagedisplay/".concat(product.imageUrl)
  }, "View")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/edit/".concat(product.id)
  }, "Edit"), ' | ', /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      deleteProduct(index);
    }
  }, "Delete")));
});

function ProductTable(_ref2) {
  var products = _ref2.products,
      deleteProduct = _ref2.deleteProduct;
  // eslint-disable-next-line react/destructuring-assignment
  var productRows = products.map(function (product, index) {
    return /*#__PURE__*/_react.default.createElement(ProductRow, {
      key: product.id,
      product: product,
      deleteProduct: deleteProduct,
      index: index
    });
  });
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Product Name"), /*#__PURE__*/_react.default.createElement("th", null, "Price"), /*#__PURE__*/_react.default.createElement("th", null, "Category"), /*#__PURE__*/_react.default.createElement("th", null, "Image"), /*#__PURE__*/_react.default.createElement("th", null, "Action"))), /*#__PURE__*/_react.default.createElement("tbody", null, productRows));
}