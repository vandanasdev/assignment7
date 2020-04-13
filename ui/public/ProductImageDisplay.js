"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductImageDisplay;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductImageDisplay(_ref) {
  var match = _ref.match;
  var imageUrl = match.params.imageUrl;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "".concat(imageUrl),
    alt: "Display"
  }));
}