"use strict";

var _ProductList = _interopRequireDefault(require("./ProductList.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals React ReactDOM */
var element = /*#__PURE__*/React.createElement(_ProductList.default, null);
ReactDOM.render(element, document.getElementById('myCompInventory'));