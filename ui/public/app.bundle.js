/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/App.js":
/*!***********************!*\
  !*** ./public/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _graphQLFetch = _interopRequireDefault(__webpack_require__(/*! ./graphQLFetch.js */ \"./public/graphQLFetch.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar ProductRow = /*#__PURE__*/function (_React$Component) {\n  _inherits(ProductRow, _React$Component);\n\n  var _super = _createSuper(ProductRow);\n\n  function ProductRow() {\n    _classCallCheck(this, ProductRow);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(ProductRow, [{\n    key: \"render\",\n    value: function render() {\n      var product = this.props.product;\n      return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, product.pname), /*#__PURE__*/React.createElement(\"td\", null, \"$\".concat(product.price)), /*#__PURE__*/React.createElement(\"td\", null, product.category), /*#__PURE__*/React.createElement(\"td\", null, /*#__PURE__*/React.createElement(\"a\", {\n        target: \"_blank\",\n        href: product.imageUrl\n      }, \"View\")));\n    }\n  }]);\n\n  return ProductRow;\n}(React.Component);\n\nvar ProductTable = /*#__PURE__*/function (_React$Component2) {\n  _inherits(ProductTable, _React$Component2);\n\n  var _super2 = _createSuper(ProductTable);\n\n  function ProductTable() {\n    _classCallCheck(this, ProductTable);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(ProductTable, [{\n    key: \"render\",\n    value: function render() {\n      // eslint-disable-next-line react/destructuring-assignment\n      var productRows = this.props.products.map(function (product) {\n        return /*#__PURE__*/React.createElement(ProductRow, {\n          key: product.id,\n          product: product\n        });\n      });\n      return /*#__PURE__*/React.createElement(\"table\", {\n        className: \"bordered-table\"\n      }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"Product Name\"), /*#__PURE__*/React.createElement(\"th\", null, \"Price\"), /*#__PURE__*/React.createElement(\"th\", null, \"Category\"), /*#__PURE__*/React.createElement(\"th\", null, \"Image\"))), /*#__PURE__*/React.createElement(\"tbody\", null, productRows));\n    }\n  }]);\n\n  return ProductTable;\n}(React.Component);\n\nvar ProductAdd = /*#__PURE__*/function (_React$Component3) {\n  _inherits(ProductAdd, _React$Component3);\n\n  var _super3 = _createSuper(ProductAdd);\n\n  function ProductAdd() {\n    var _this;\n\n    _classCallCheck(this, ProductAdd);\n\n    _this = _super3.call(this);\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ProductAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.ProductAdd;\n      var priceValue = form.price.value.slice(1);\n      var product = {\n        category: form.category.value,\n        price: priceValue,\n        pname: form.pname.value,\n        imageUrl: form.imageUrl.value\n      }; // eslint-disable-next-line react/destructuring-assignment\n\n      this.props.createProduct(product);\n      form.price.value = '$';\n      form.pname.value = '';\n      form.imageUrl.value = '';\n      form.category.value = '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"form\", {\n        name: \"ProductAdd\",\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/React.createElement(\"section\", {\n        className: \"grid-1\"\n      }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"label\", null, \"Category \"), /*#__PURE__*/React.createElement(\"select\", {\n        id: \"category\"\n      }, /*#__PURE__*/React.createElement(\"option\", {\n        disabled: true,\n        selected: true,\n        value: \"\"\n      }, \" -- Select a product -- \"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Shirts\"\n      }, \"Shirts\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Jeans\"\n      }, \"Jeans\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Jackets\"\n      }, \"Jackets\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Sweaters\"\n      }, \"Sweaters\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Accessories\"\n      }, \"Accesories\"))), /*#__PURE__*/React.createElement(\"div\", {\n        id: \"price\"\n      }, /*#__PURE__*/React.createElement(\"label\", null, \"Price Per Unit\"), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"price\",\n        defaultValue: \"$\"\n      })), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"label\", null, \"Product Name \"), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"pname\"\n      })), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"label\", null, \"Image URL \"), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"imageUrl\"\n      })), /*#__PURE__*/React.createElement(\"button\", {\n        type: \"submit\",\n        className: \"butn\"\n      }, \" Add Product\")));\n    }\n  }]);\n\n  return ProductAdd;\n}(React.Component);\n\nvar ProductList = /*#__PURE__*/function (_React$Component4) {\n  _inherits(ProductList, _React$Component4);\n\n  var _super4 = _createSuper(ProductList);\n\n  function ProductList() {\n    var _this2;\n\n    _classCallCheck(this, ProductList);\n\n    _this2 = _super4.call(this);\n    _this2.state = {\n      products: []\n    };\n    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(ProductList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // call to listData so that data is displayed in the list even after the page is refreshed\n      this.listData();\n    }\n  }, {\n    key: \"listData\",\n    value: function () {\n      var _listData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                query = \"query {\\n          productList {\\n            id category pname price imageUrl\\n          }\\n        }\";\n                _context.next = 3;\n                return (0, _graphQLFetch.default)(query);\n\n              case 3:\n                data = _context.sent;\n\n                if (data) {\n                  this.setState({\n                    products: data.productList\n                  });\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function listData() {\n        return _listData.apply(this, arguments);\n      }\n\n      return listData;\n    }()\n  }, {\n    key: \"createProduct\",\n    value: function () {\n      var _createProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                query = \"mutation productAdd($product: ProductInputs!){\\n            productAdd(product: $product){\\n                id\\n            }\\n        }\";\n                _context2.next = 3;\n                return (0, _graphQLFetch.default)(query, {\n                  product: product\n                });\n\n              case 3:\n                data = _context2.sent;\n\n                if (data) {\n                  this.listData();\n                }\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function createProduct(_x) {\n        return _createProduct.apply(this, arguments);\n      }\n\n      return createProduct;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"My Company Inventory\"), /*#__PURE__*/React.createElement(\"div\", null, \"Showing all available products\"), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(ProductTable, {\n        products: this.state.products\n      }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"div\", null, \" Add a new product to the inventory \"), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(ProductAdd, {\n        createProduct: this.createProduct\n      }));\n    }\n  }]);\n\n  return ProductList;\n}(React.Component);\n\nvar element = /*#__PURE__*/React.createElement(ProductList, null);\nReactDOM.render(element, document.getElementById('myCompInventory'));\n\n//# sourceURL=webpack:///./public/App.js?");

/***/ }),

/***/ "./public/graphQLFetch.js":
/*!********************************!*\
  !*** ./public/graphQLFetch.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = graphQLFetch;\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint-disable no-alert */\nfunction graphQLFetch(_x) {\n  return _graphQLFetch.apply(this, arguments);\n}\n\nfunction _graphQLFetch() {\n  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {\n    var variables,\n        response,\n        body,\n        result,\n        error,\n        details,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(window.ENV.UI_API_ENDPOINT, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                query: query,\n                variables: variables\n              })\n            });\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.text();\n\n          case 7:\n            body = _context.sent;\n            result = JSON.parse(body);\n\n            if (result.errors) {\n              error = result.errors[0];\n\n              if (error.extensions.code === 'BAD_USER_INPUT') {\n                details = error.extensions.exception.errors.join('\\n ');\n                alert(\"\".concat(error.message, \":\\n \").concat(details));\n              } else {\n                alert(\"\".concat(error.extensions.code, \": \").concat(error.message));\n              }\n            }\n\n            return _context.abrupt(\"return\", result.data);\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](1);\n            alert(\"Error in sending data to server: \".concat(_context.t0.message));\n            return _context.abrupt(\"return\", null);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 13]]);\n  }));\n  return _graphQLFetch.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./public/graphQLFetch.js?");

/***/ })

/******/ });