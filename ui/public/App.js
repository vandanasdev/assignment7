"use strict";

require("babel-polyfill");

require("whatwg-fetch");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ProductList = _interopRequireDefault(require("./ProductList.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element = /*#__PURE__*/_react.default.createElement(_ProductList.default, null);

_reactDom.default.render(element, document.getElementById('myCompInventory'));