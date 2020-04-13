"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable no-unused-vars */

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-for */

/* eslint-disable max-len */

/* globals React PropTypes */
var ProductAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductAdd, _React$Component);

  var _super = _createSuper(ProductAdd);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.ProductAdd;
      var priceValue = form.price.value.slice(1);
      var product = {
        category: form.category.value,
        price: priceValue,
        pname: form.pname.value,
        imageUrl: form.imageUrl.value
      }; // eslint-disable-next-line react/destructuring-assignment

      this.props.createProduct(product);
      form.price.value = '$';
      form.pname.value = '';
      form.imageUrl.value = '';
      form.category.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "ProductAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("section", {
        className: "grid-1"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Category "), /*#__PURE__*/React.createElement("select", {
        id: "category"
      }, /*#__PURE__*/React.createElement("option", {
        disabled: true,
        selected: true,
        value: ""
      }, " -- Select a product -- "), /*#__PURE__*/React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
        value: "Accessories"
      }, "Accesories"))), /*#__PURE__*/React.createElement("div", {
        id: "price"
      }, /*#__PURE__*/React.createElement("label", null, "Price Per Unit"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "price",
        defaultValue: "$"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Product Name "), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "pname"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Image URL "), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "imageUrl"
      })), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "butn"
      }, " Add Product")));
    }
  }]);

  return ProductAdd;
}(React.Component);

exports.default = ProductAdd;