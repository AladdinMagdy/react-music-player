module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SmartComponents/SmartCardMedia.js":
/*!******************************************************!*\
  !*** ./components/SmartComponents/SmartCardMedia.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmartCardMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/card */ "@rmwc/card");
/* harmony import */ var _rmwc_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rmwc_card__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SmartCardMedia =
/*#__PURE__*/
function (_Component) {
  _inherits(SmartCardMedia, _Component);

  function SmartCardMedia() {
    _classCallCheck(this, SmartCardMedia);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmartCardMedia).apply(this, arguments));
  }

  _createClass(SmartCardMedia, [{
    key: "render",
    value: function render() {
      return;
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
        sixteenByNine: this.props.data && this.props.data.ratio && this.props.data.ratio == "sixteenByNine",
        style: {
          backgroundImage: "url(" + this.props.data && this.props.data.imageUrl + ")"
        }
      });
    }
  }]);

  return SmartCardMedia;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/SmartComponents/SmartTypography.js":
/*!*******************************************************!*\
  !*** ./components/SmartComponents/SmartTypography.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmartTypography; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rmwc_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rmwc/typography */ "@rmwc/typography");
/* harmony import */ var _rmwc_typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rmwc_typography__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SmartTypography =
/*#__PURE__*/
function (_Component) {
  _inherits(SmartTypography, _Component);

  function SmartTypography() {
    _classCallCheck(this, SmartTypography);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmartTypography).apply(this, arguments));
  }

  _createClass(SmartTypography, [{
    key: "render",
    value: function render() {
      // { text: "Our Changing Planet", use: "headline6", tag: "h2" }
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rmwc_typography__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        use: this.props.data && this.props.data.use || "body1",
        tag: this.props.data && this.props.data.tag || "h2"
      }, this.props.data && this.props.data.text || "");
    }
  }]);

  return SmartTypography;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/SmartComponents/index.js":
/*!*********************************************!*\
  !*** ./components/SmartComponents/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _rmwc_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rmwc/card */ "@rmwc/card");
/* harmony import */ var _rmwc_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartTypography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmartTypography */ "./components/SmartComponents/SmartTypography.js");
/* harmony import */ var _SmartCardMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmartCardMedia */ "./components/SmartComponents/SmartCardMedia.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { Typography } from "@rmwc/typography";





var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      template: "smart-card",
      children: [{
        template: "cardPrimaryAction",
        children: [{
          template: "cardMedia",
          data: {
            imageUrl: "https://material-components-web.appspot.com/images/16-9.jpg",
            ratio: "sixteenByNine"
          }
        }, {
          template: "typography",
          data: {
            text: "Our Changing Planet",
            use: "headline6",
            tag: "h2"
          }
        }, {
          template: "typography",
          data: {
            text: "Our Changing Planet",
            use: "headline6",
            tag: "h2"
          }
        }]
      }, {
        template: "cardActions",
        children: [{
          template: "cardActionButtons",
          children: [{
            template: "cardAction",
            data: {
              type: "text",
              text: "Read"
            }
          }, {
            template: "cardAction",
            data: {
              type: "text",
              text: "Bookmark"
            }
          }]
        }, {
          template: "cardActionIcons",
          children: [{
            template: "cardAction",
            data: {
              type: "icon",
              currentState: "favorite",
              toggledState: "favorite_border"
            }
          }, {
            template: "cardAction",
            data: {
              type: "icon",
              currentState: "share"
            }
          }, {
            template: "cardAction",
            data: {
              type: "icon",
              currentState: "more_vert"
            }
          }]
        }]
      }]
    });

    return _this;
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      var sampleTypo = {
        template: "typography",
        data: {
          text: "Our Changing Planet",
          use: "headline6",
          tag: "h2"
        }
      };
      var sampleCardMedia = {
        template: "cardMedia",
        data: {
          imageUrl: "https://material-components-web.appspot.com/images/16-9.jpg",
          ratio: "sixteenByNine"
        }
      };
      var samplePrimaryActions = {
        template: "cardPrimaryAction",
        children: [{
          template: "cardMedia",
          data: {
            imageUrl: "https://material-components-web.appspot.com/images/16-9.jpg",
            ratio: "sixteenByNine"
          }
        }, {
          template: "typography",
          data: {
            text: "Our Changing Planet",
            use: "headline6",
            tag: "h2"
          }
        }, {
          template: "typography",
          data: {
            text: "Our Changing Planet",
            use: "headline6",
            tag: "h2"
          }
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        style: {
          width: "21rem"
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardPrimaryAction"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SmartCardMedia__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: sampleCardMedia.data
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: "0 1rem 1rem 1rem"
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SmartTypography__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: sampleTypo.data
      }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardActions"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardActionButtons"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardAction"], null, "Read"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardAction"], null, "Bookmark")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardActionIcons"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardAction"], {
        onIcon: "favorite",
        icon: "favorite_border"
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardAction"], {
        icon: "share"
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_rmwc_card__WEBPACK_IMPORTED_MODULE_0__["CardAction"], {
        icon: "more_vert"
      })))));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SmartComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SmartComponents */ "./components/SmartComponents/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import "../scss/styles.scss";
// import "../scss/MusicPlayer.css";
// import MusicPlayer from "react-responsive-music-player";

var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index() {
    _classCallCheck(this, index);

    return _possibleConstructorReturn(this, _getPrototypeOf(index).apply(this, arguments));
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Home Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "smartComponents"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SmartComponents__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@rmwc/card":
/*!*****************************!*\
  !*** external "@rmwc/card" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/card");

/***/ }),

/***/ "@rmwc/typography":
/*!***********************************!*\
  !*** external "@rmwc/typography" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rmwc/typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map