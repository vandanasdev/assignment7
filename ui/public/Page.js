"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = _interopRequireDefault(require("react"));

var _Contents = _interopRequireDefault(require("./Contents.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Contents.default, null));
}