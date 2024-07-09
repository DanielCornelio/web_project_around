/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Card = /*#__PURE__*/function () {
  function Card(name, link, templateSelector, _ref) {
    var handleClick = _ref.handleClick;
    _classCallCheck(this, Card);
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleClick = handleClick;
  }
  return _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var template = document.querySelector(this._templateSelector);
      var templateNode = template.content.querySelector(".element");
      var cardNode = templateNode.cloneNode(true);
      cardNode.querySelector(".element__image").src = this._link;
      cardNode.querySelector(".element__image").alt = "Imagen de " + this._name;
      cardNode.querySelector(".element__text").textContent = this._name;
      cardNode.querySelector(".element__button-trash").addEventListener("click", function () {
        cardNode.remove();
      });
      return cardNode;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(cardNode) {
      var _this = this;
      var likeButton = cardNode.querySelector(".element__button-like");
      likeButton.addEventListener("click", function () {
        likeButton.classList.toggle("element__button-like_active");
      });
      cardNode.querySelector(".element__image").addEventListener("click", function () {
        _this._handleClick(_this._name, _this._link);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var node = this._getTemplate();
      this._setEventListeners(node);
      return node;
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/FormValidator.js":
/*!**************************************!*\
  !*** ./src/scripts/FormValidator.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidator; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(formElement, formConfig) {
    _classCallCheck(this, FormValidator);
    this._formElement = formElement;
    this._formConfig = formConfig;
  }
  return _createClass(FormValidator, [{
    key: "_setEventListeners",
    value: function _setEventListeners(form, formConfig) {
      var _this = this;
      var formInputs = Array.from(form.querySelectorAll(formConfig.inputSelector));
      var submitButton = form.querySelector(formConfig.submitButtonSelector);
      formInputs.forEach(function (inputElement) {
        inputElement.addEventListener("input", function (evt) {
          var errorNode = form.querySelector(".popup__error_type_".concat(inputElement.name));
          if (!inputElement.validity.valid) {
            inputElement.classList.add(formConfig.inputErrorClass);
            errorNode.textContent = inputElement.validationMessage;
          } else {
            inputElement.classList.remove(formConfig.inputErrorClass);
            errorNode.textContent = "";
          }
          submitButton.disabled = !_this._isValidInputs(formInputs);
        });
      });
      submitButton.disabled = !this._isValidInputs(formInputs);
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners(this._formElement, this._formConfig);
    }
  }, {
    key: "_isValidInputs",
    value: function _isValidInputs(formInputs) {
      return formInputs.every(function (item) {
        return item.validity.valid;
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/Popup.js":
/*!******************************!*\
  !*** ./src/scripts/Popup.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;
    _classCallCheck(this, Popup);
    _defineProperty(this, "_handleEscClose", function (evt) {
      if (evt.key === "Escape") {
        _this.close();
      }
    });
    this._popupSelector = popupSelector;
    this.setEventListeners();
  }
  return _createClass(Popup, [{
    key: "open",
    value: function open() {
      var popupOpen = document.querySelector(this._popupSelector);
      popupOpen.classList.add("popup_open");
      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      var popupOpen = document.querySelector(this._popupSelector);
      popupOpen.classList.remove("popup_open");
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      var popupOpen = document.querySelector(this._popupSelector);
      var closeButton = popupOpen.querySelector(".popup__close-icon");
      closeButton.addEventListener("click", function () {
        _this2.close();
      });
      popupOpen.querySelector(".popup__overlay").addEventListener("click", function () {
        _this2.close();
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/PopupWithForm.js":
/*!**************************************!*\
  !*** ./src/scripts/PopupWithForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  function PopupWithForm(selector, handleSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _callSuper(this, PopupWithForm, [selector]);
    _this._handleSubmit = handleSubmit;
    return _this;
  }
  _inherits(PopupWithForm, _Popup);
  return _createClass(PopupWithForm, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      var popupOpen = document.querySelector(this._popupSelector);
      var form = popupOpen.querySelector("form");
      form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this2._handleSubmit(_this2.getInputValues());
        _this2.close();
      });
    }
  }, {
    key: "getInputValues",
    value: function getInputValues() {
      var popupOpen = document.querySelector(this._popupSelector);
      var form = popupOpen.querySelector("form");
      var inputValues = {};
      var inputForms = Array.from(form.elements);
      inputForms.forEach(function (element) {
        if (element.name) {
          inputValues[element.name] = element.value;
        }
      });
      return inputValues;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      var popupOpen = document.querySelector(this._popupSelector);
      var form = popupOpen.querySelector("form");
      form.reset();
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/PopupWithImage.js":
/*!***************************************!*\
  !*** ./src/scripts/PopupWithImage.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  function PopupWithImage(selector) {
    _classCallCheck(this, PopupWithImage);
    return _callSuper(this, PopupWithImage, [selector]);
  }
  _inherits(PopupWithImage, _Popup);
  return _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      var popupOpen = document.querySelector(this._popupSelector);
      popupOpen.querySelector(".popup__image").setAttribute("alt", name);
      popupOpen.querySelector(".popup__image").setAttribute("src", link);
      popupOpen.querySelector(".popup__title").textContent = name;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithImage.prototype), "setEventListeners", this).call(this);
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/Section.js":
/*!********************************!*\
  !*** ./src/scripts/Section.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, templateSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._templateSelector = document.querySelector(templateSelector);
  }
  return _createClass(Section, [{
    key: "renderer",
    value: function renderer() {
      var _this = this;
      this._items.forEach(function (item) {
        var node = _this._renderer(item);
        _this.addItem(node);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._templateSelector.append(element);
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/UserInfo.js":
/*!*********************************!*\
  !*** ./src/scripts/UserInfo.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var name = _ref.name,
      about = _ref.about;
    _classCallCheck(this, UserInfo);
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
  }
  return _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        about: this._about.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(name, about) {
      this._name.textContent = name;
      this._about.textContent = about;
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutMeInput: function() { return /* binding */ aboutMeInput; },
/* harmony export */   closeAllModal: function() { return /* binding */ closeAllModal; },
/* harmony export */   createCard: function() { return /* binding */ createCard; },
/* harmony export */   deleteCard: function() { return /* binding */ deleteCard; },
/* harmony export */   elementsArea: function() { return /* binding */ elementsArea; },
/* harmony export */   formConfig: function() { return /* binding */ formConfig; },
/* harmony export */   formElement: function() { return /* binding */ formElement; },
/* harmony export */   handleAddCard: function() { return /* binding */ handleAddCard; },
/* harmony export */   handleEscPress: function() { return /* binding */ handleEscPress; },
/* harmony export */   handleProfileFormSubmit: function() { return /* binding */ handleProfileFormSubmit; },
/* harmony export */   imagePopup: function() { return /* binding */ imagePopup; },
/* harmony export */   initialCards: function() { return /* binding */ initialCards; },
/* harmony export */   linkInput: function() { return /* binding */ linkInput; },
/* harmony export */   nameInput: function() { return /* binding */ nameInput; },
/* harmony export */   openAddButton: function() { return /* binding */ openAddButton; },
/* harmony export */   openEditButton: function() { return /* binding */ openEditButton; },
/* harmony export */   placeInput: function() { return /* binding */ placeInput; },
/* harmony export */   popupCloseIcon: function() { return /* binding */ popupCloseIcon; },
/* harmony export */   popupOverlays: function() { return /* binding */ popupOverlays; },
/* harmony export */   popupPlace: function() { return /* binding */ popupPlace; },
/* harmony export */   popupProfile: function() { return /* binding */ popupProfile; },
/* harmony export */   profileText: function() { return /* binding */ profileText; },
/* harmony export */   profileTitle: function() { return /* binding */ profileTitle; }
/* harmony export */ });
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ "./src/scripts/Card.js");

var openEditButton = document.querySelector(".profile__edit-button");
var openAddButton = document.querySelector(".profile__add-button");
var popupProfile = document.querySelector(".popup_profile");
var popupPlace = document.querySelector(".popup_place");
var popupCloseIcon = document.querySelectorAll(".popup__close-icon");
var formElement = document.querySelector(".popup__content");
var profileText = document.querySelector(".profile__text");
var profileTitle = document.querySelector(".profile__title");
var nameInput = formElement.querySelector(".popup__input-name");
var aboutMeInput = formElement.querySelector(".popup__input-about");
var placeInput = popupPlace.querySelector(".popup__input-place");
var linkInput = popupPlace.querySelector(".popup__input-link");
var elementsArea = document.querySelector(".elements");
var deleteCard = document.querySelector(".element__button-trash");
var imagePopup = document.querySelector("#image-popup");
var popupOverlays = document.querySelectorAll(".popup__overlay");
var initialCards = [{
  name: "Valle de Yosemite",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
}, {
  name: "Lago Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
}, {
  name: "Montañas Calvas",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
}, {
  name: "Parque Nacional de la Vanoise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
}, {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
}];
var formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_has_error",
  errorClass: "popup__error"
};
function closeAllModal() {
  popupProfile.classList.remove("popup_open");
  popupPlace.classList.remove("popup_open");
  imagePopup.classList.remove("popup_open");
  document.removeEventListener("keydown", handleEscPress);
}
function handleEscPress(evt) {
  if (evt.key === "Escape") {
    closeAllModal();
  }
}
function createCard(name, link, popupImage) {
  return new _Card_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, link, "#element-card", {
    handleClick: function handleClick(name, link) {
      popupImage.open(name, link);
    }
  }).render();
  3;
}
function handleAddCard(evt) {
  evt.preventDefault();
  var cardNode = createCard(placeInput.value, linkInput.value);
  elementsArea.prepend(cardNode);
  closeAllModal();
  placeInput.value = "";
  linkInput.value = "";
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileText.textContent = aboutMeInput.value;
  profileTitle.textContent = nameInput.value;
  closeAllModal();
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _scripts_Section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Section.js */ "./src/scripts/Section.js");
/* harmony import */ var _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/PopupWithForm.js */ "./src/scripts/PopupWithForm.js");
/* harmony import */ var _scripts_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/PopupWithImage.js */ "./src/scripts/PopupWithImage.js");
/* harmony import */ var _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/FormValidator.js */ "./src/scripts/FormValidator.js");
/* harmony import */ var _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/utils.js */ "./src/scripts/utils.js");
/* harmony import */ var _scripts_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/UserInfo.js */ "./src/scripts/UserInfo.js");







var formValidatorProfile = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](_scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.formElement, _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.formConfig);
var formValidatorAddCard = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](_scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.popupPlace, _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.formConfig);
var userObjet = {
  name: ".profile__title",
  about: ".profile__text"
};
var userInfo = new _scripts_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"](userObjet);
var popupProfile = new _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](".popup_profile", function (_ref) {
  var name = _ref.name,
    about = _ref.about;
  userInfo.setUserInfo(name, about);
  popupProfile.close();
});
var popupAddCard = new _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__["default"](".popup_place", function (_ref2) {
  var link = _ref2.link,
    place = _ref2.place;
  var cardNode = (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.createCard)(place, link, popupImage);
  _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.elementsArea.prepend(cardNode);
  popupAddCard.close();
});
var popupImage = new _scripts_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"]("#image-popup");
var section = new _scripts_Section_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  items: _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.initialCards,
  renderer: function renderer(item) {
    var cardNode = (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.createCard)(item.name, item.link, popupImage);
    return cardNode;
  }
}, ".elements");
section.renderer();
_scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.openAddButton.addEventListener("click", function () {
  popupAddCard.open();
});
_scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.openEditButton.addEventListener("click", function () {
  popupProfile.open();
  _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.aboutMeInput.value = _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.profileText.textContent;
  _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.nameInput.value = _scripts_utils_js__WEBPACK_IMPORTED_MODULE_5__.profileTitle.textContent;
});
formValidatorProfile.enableValidation();
formValidatorAddCard.enableValidation();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRLEVBQUUsU0FBQUEsU0FBQ25DLElBQUksRUFBSztJQUNsQixJQUFNMUMsUUFBUSxHQUFHNEcsNkRBQVUsQ0FBQ2xFLElBQUksQ0FBQzdELElBQUksRUFBRTZELElBQUksQ0FBQzVELElBQUksRUFBRStILFVBQVUsQ0FBQztJQUM3RCxPQUFPN0csUUFBUTtFQUNqQjtBQUNGLENBQUMsRUFDRCxXQUNGLENBQUM7QUFDRHdILE9BQU8sQ0FBQzNDLFFBQVEsQ0FBQyxDQUFDO0FBRWxCVyw0REFBYSxDQUFDbkYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDbERnSCxZQUFZLENBQUNwRSxJQUFJLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRnNDLDZEQUFjLENBQUNsRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtFQUNuRG9GLFlBQVksQ0FBQ3hDLElBQUksQ0FBQyxDQUFDO0VBQ25COEMsMkRBQVksQ0FBQ3RHLEtBQUssR0FBR21HLDBEQUFXLENBQUN4RixXQUFXO0VBQzVDMEYsd0RBQVMsQ0FBQ3JHLEtBQUssR0FBR29HLDJEQUFZLENBQUN6RixXQUFXO0FBQzVDLENBQUMsQ0FBQztBQUVGNkcsb0JBQW9CLENBQUN6RSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDMEUsb0JBQW9CLENBQUMxRSxnQkFBZ0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvc2NyaXB0cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9zY3JpcHRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3NjcmlwdHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3NjcmlwdHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvc2NyaXB0cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvc2NyaXB0cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9zY3JpcHRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9zY3JpcHRzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGluaywgdGVtcGxhdGVTZWxlY3RvciwgeyBoYW5kbGVDbGljayB9KSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fbGluayA9IGxpbms7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3I7XG4gICAgdGhpcy5faGFuZGxlQ2xpY2sgPSBoYW5kbGVDbGljaztcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3Rvcik7XG4gICAgY29uc3QgdGVtcGxhdGVOb2RlID0gdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRcIik7XG4gICAgY29uc3QgY2FyZE5vZGUgPSB0ZW1wbGF0ZU5vZGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgY2FyZE5vZGUucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19pbWFnZVwiKS5zcmMgPSB0aGlzLl9saW5rO1xuICAgIGNhcmROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9faW1hZ2VcIikuYWx0ID0gXCJJbWFnZW4gZGUgXCIgKyB0aGlzLl9uYW1lO1xuICAgIGNhcmROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9fdGV4dFwiKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG4gICAgY2FyZE5vZGVcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2J1dHRvbi10cmFzaFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNhcmROb2RlLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gY2FyZE5vZGU7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoY2FyZE5vZGUpIHtcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gY2FyZE5vZGUucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19idXR0b24tbGlrZVwiKTtcblxuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImVsZW1lbnRfX2J1dHRvbi1saWtlX2FjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGNhcmROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9faW1hZ2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKGZvcm1FbGVtZW50LCBmb3JtQ29uZmlnKSB7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9mb3JtQ29uZmlnID0gZm9ybUNvbmZpZztcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtLCBmb3JtQ29uZmlnKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoZm9ybUNvbmZpZy5pbnB1dFNlbGVjdG9yKVxuICAgICk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKGZvcm1Db25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgZm9ybUlucHV0cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvck5vZGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5wb3B1cF9fZXJyb3JfdHlwZV8ke2lucHV0RWxlbWVudC5uYW1lfWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChmb3JtQ29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgICAgZXJyb3JOb2RlLnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGZvcm1Db25maWcuaW5wdXRFcnJvckNsYXNzKTtcbiAgICAgICAgICBlcnJvck5vZGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9ICF0aGlzLl9pc1ZhbGlkSW5wdXRzKGZvcm1JbnB1dHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSAhdGhpcy5faXNWYWxpZElucHV0cyhmb3JtSW5wdXRzKTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsZW1lbnQsIHRoaXMuX2Zvcm1Db25maWcpO1xuICB9XG5cbiAgX2lzVmFsaWRJbnB1dHMoZm9ybUlucHV0cykge1xuICAgIHJldHVybiBmb3JtSW5wdXRzLmV2ZXJ5KChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS52YWxpZGl0eS52YWxpZDtcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IgPSBwb3B1cFNlbGVjdG9yO1xuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIGNvbnN0IHBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fcG9wdXBTZWxlY3Rvcik7XG4gICAgcG9wdXBPcGVuLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICBjb25zdCBwb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3BvcHVwU2VsZWN0b3IpO1xuICAgIHBvcHVwT3Blbi5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBwb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3BvcHVwU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBwb3B1cE9wZW4ucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2UtaWNvblwiKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgcG9wdXBPcGVuLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX292ZXJsYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgaGFuZGxlU3VibWl0KSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IGhhbmRsZVN1Ym1pdDtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgY29uc3QgcG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9wb3B1cFNlbGVjdG9yKTtcbiAgICBjb25zdCBmb3JtID0gcG9wdXBPcGVuLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCh0aGlzLmdldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgcG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9wb3B1cFNlbGVjdG9yKTtcbiAgICBjb25zdCBmb3JtID0gcG9wdXBPcGVuLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XG4gICAgY29uc3QgaW5wdXRGb3JtcyA9IEFycmF5LmZyb20oZm9ybS5lbGVtZW50cyk7XG4gICAgaW5wdXRGb3Jtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5uYW1lKSB7XG4gICAgICAgIGlucHV0VmFsdWVzW2VsZW1lbnQubmFtZV0gPSBlbGVtZW50LnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbnB1dFZhbHVlcztcbiAgfVxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIGNvbnN0IHBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fcG9wdXBTZWxlY3Rvcik7XG4gICAgY29uc3QgZm9ybSA9IHBvcHVwT3Blbi5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH1cbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG4gIG9wZW4obmFtZSwgbGluaykge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICBjb25zdCBwb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3BvcHVwU2VsZWN0b3IpO1xuXG4gICAgcG9wdXBPcGVuLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpLnNldEF0dHJpYnV0ZShcImFsdFwiLCBuYW1lKTtcbiAgICBwb3B1cE9wZW4ucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIGxpbmspO1xuICAgIHBvcHVwT3Blbi5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX190aXRsZVwiKS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIH1cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCB0ZW1wbGF0ZVNlbGVjdG9yKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRlbXBsYXRlU2VsZWN0b3IpO1xuICB9XG4gIHJlbmRlcmVyKCkge1xuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9yZW5kZXJlcihpdGVtKTtcblxuICAgICAgdGhpcy5hZGRJdGVtKG5vZGUpO1xuICAgIH0pO1xuICB9XG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IuYXBwZW5kKGVsZW1lbnQpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGFib3V0IH0pIHtcbiAgICB0aGlzLl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lKTtcbiAgICB0aGlzLl9hYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYWJvdXQpO1xuICB9XG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0LnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cbiAgc2V0VXNlckluZm8obmFtZSwgYWJvdXQpIHtcbiAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl9hYm91dC50ZXh0Q29udGVudCA9IGFib3V0O1xuICB9XG59IiwiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZC5qc1wiO1xuXG5leHBvcnQgY29uc3Qgb3BlbkVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IG9wZW5BZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5leHBvcnQgY29uc3QgcG9wdXBQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9wcm9maWxlXCIpO1xuZXhwb3J0IGNvbnN0IHBvcHVwUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3BsYWNlXCIpO1xuZXhwb3J0IGNvbnN0IHBvcHVwQ2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fY2xvc2UtaWNvblwiKTtcbmV4cG9ydCBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NvbnRlbnRcIik7XG5cbmV4cG9ydCBjb25zdCBwcm9maWxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGV4dFwiKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xuXG5leHBvcnQgY29uc3QgbmFtZUlucHV0ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXQtbmFtZVwiKTtcbmV4cG9ydCBjb25zdCBhYm91dE1lSW5wdXQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dC1hYm91dFwiKTtcblxuZXhwb3J0IGNvbnN0IHBsYWNlSW5wdXQgPSBwb3B1cFBsYWNlLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0LXBsYWNlXCIpO1xuZXhwb3J0IGNvbnN0IGxpbmtJbnB1dCA9IHBvcHVwUGxhY2UucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXQtbGlua1wiKTtcblxuZXhwb3J0IGNvbnN0IGVsZW1lbnRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNcIik7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19idXR0b24tdHJhc2hcIik7XG5cbmV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wb3B1cFwiKTtcblxuZXhwb3J0IGNvbnN0IHBvcHVwT3ZlcmxheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19vdmVybGF5XCIpO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJWYWxsZSBkZSBZb3NlbWl0ZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMveW9zZW1pdGUuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gTG91aXNlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTW9udGHDsWFzIENhbHZhc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBhcnF1ZSBOYWNpb25hbCBkZSBsYSBWYW5vaXNlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFnby5qcGdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb3JtQ29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLnBvcHVwX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX2J1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25faW5hY3RpdmVcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF9oYXNfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJwb3B1cF9fZXJyb3JcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUFsbE1vZGFsKCkge1xuICBwb3B1cFByb2ZpbGUuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5cIik7XG4gIHBvcHVwUGxhY2UuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5cIik7XG4gIGltYWdlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5cIik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY1ByZXNzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVzY1ByZXNzKGV2dCkge1xuICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNsb3NlQWxsTW9kYWwoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChuYW1lLCBsaW5rLCBwb3B1cEltYWdlKSB7XG4gIHJldHVybiBuZXcgQ2FyZChuYW1lLCBsaW5rLCBcIiNlbGVtZW50LWNhcmRcIiwge1xuICAgIGhhbmRsZUNsaWNrOiAobmFtZSwgbGluaykgPT4ge1xuICAgICAgcG9wdXBJbWFnZS5vcGVuKG5hbWUsIGxpbmspO1xuICAgIH0sXG4gIH0pLnJlbmRlcigpO1xuICAzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGNhcmROb2RlID0gY3JlYXRlQ2FyZChwbGFjZUlucHV0LnZhbHVlLCBsaW5rSW5wdXQudmFsdWUpO1xuICBlbGVtZW50c0FyZWEucHJlcGVuZChjYXJkTm9kZSk7XG4gIGNsb3NlQWxsTW9kYWwoKTtcblxuICBwbGFjZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgbGlua0lucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgcHJvZmlsZVRleHQudGV4dENvbnRlbnQgPSBhYm91dE1lSW5wdXQudmFsdWU7XG4gIHByb2ZpbGVUaXRsZS50ZXh0Q29udGVudCA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgY2xvc2VBbGxNb2RhbCgpO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9zY3JpcHRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuL3NjcmlwdHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuL3NjcmlwdHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuL3NjcmlwdHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlQ2FyZCxcbiAgb3BlbkVkaXRCdXR0b24sXG4gIG9wZW5BZGRCdXR0b24sXG4gIHBvcHVwQ2xvc2VJY29uLFxuICBmb3JtRWxlbWVudCxcbiAgcHJvZmlsZVRleHQsXG4gIHByb2ZpbGVUaXRsZSxcbiAgcG9wdXBQbGFjZSxcbiAgaW5pdGlhbENhcmRzLFxuICBwb3B1cE92ZXJsYXlzLFxuICBjbG9zZUFsbE1vZGFsLFxuICBoYW5kbGVBZGRDYXJkLFxuICBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdCxcbiAgZm9ybUNvbmZpZyxcbiAgaGFuZGxlRXNjUHJlc3MsXG4gIGFib3V0TWVJbnB1dCxcbiAgbmFtZUlucHV0LFxuICBlbGVtZW50c0FyZWEsXG4gIHBsYWNlSW5wdXQsXG4gIGxpbmtJbnB1dCxcbn0gZnJvbSBcIi4vc2NyaXB0cy91dGlscy5qc1wiO1xuXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vc2NyaXB0cy9Vc2VySW5mby5qc1wiO1xuXG5jb25zdCBmb3JtVmFsaWRhdG9yUHJvZmlsZSA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1FbGVtZW50LCBmb3JtQ29uZmlnKTtcbmNvbnN0IGZvcm1WYWxpZGF0b3JBZGRDYXJkID0gbmV3IEZvcm1WYWxpZGF0b3IocG9wdXBQbGFjZSwgZm9ybUNvbmZpZyk7XG5jb25zdCB1c2VyT2JqZXQgPSB7IG5hbWU6IFwiLnByb2ZpbGVfX3RpdGxlXCIsIGFib3V0OiBcIi5wcm9maWxlX190ZXh0XCIgfTtcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHVzZXJPYmpldCk7XG5jb25zdCBwb3B1cFByb2ZpbGUgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF9wcm9maWxlXCIsICh7IG5hbWUsIGFib3V0IH0pID0+IHtcbiAgdXNlckluZm8uc2V0VXNlckluZm8obmFtZSwgYWJvdXQpO1xuICBwb3B1cFByb2ZpbGUuY2xvc2UoKTtcbn0pO1xuY29uc3QgcG9wdXBBZGRDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfcGxhY2VcIiwgKHsgbGluaywgcGxhY2UgfSkgPT4ge1xuICBjb25zdCBjYXJkTm9kZSA9IGNyZWF0ZUNhcmQocGxhY2UsIGxpbmssIHBvcHVwSW1hZ2UpO1xuICBlbGVtZW50c0FyZWEucHJlcGVuZChjYXJkTm9kZSk7XG4gIHBvcHVwQWRkQ2FyZC5jbG9zZSgpO1xufSk7XG5cbmNvbnN0IHBvcHVwSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIjaW1hZ2UtcG9wdXBcIik7XG5cbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXG4gICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjYXJkTm9kZSA9IGNyZWF0ZUNhcmQoaXRlbS5uYW1lLCBpdGVtLmxpbmssIHBvcHVwSW1hZ2UpO1xuICAgICAgcmV0dXJuIGNhcmROb2RlO1xuICAgIH0sXG4gIH0sXG4gIFwiLmVsZW1lbnRzXCJcbik7XG5zZWN0aW9uLnJlbmRlcmVyKCk7XG5cbm9wZW5BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcG9wdXBBZGRDYXJkLm9wZW4oKTtcbn0pO1xuXG5vcGVuRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBwb3B1cFByb2ZpbGUub3BlbigpO1xuICBhYm91dE1lSW5wdXQudmFsdWUgPSBwcm9maWxlVGV4dC50ZXh0Q29udGVudDtcbiAgbmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZVRpdGxlLnRleHRDb250ZW50O1xufSk7XG5cbmZvcm1WYWxpZGF0b3JQcm9maWxlLmVuYWJsZVZhbGlkYXRpb24oKTtcbmZvcm1WYWxpZGF0b3JBZGRDYXJkLmVuYWJsZVZhbGlkYXRpb24oKTsiXSwibmFtZXMiOlsiQ2FyZCIsIm5hbWUiLCJsaW5rIiwidGVtcGxhdGVTZWxlY3RvciIsIl9yZWYiLCJoYW5kbGVDbGljayIsIl9jbGFzc0NhbGxDaGVjayIsIl9uYW1lIiwiX2xpbmsiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDbGljayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2dldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZU5vZGUiLCJjb250ZW50IiwiY2FyZE5vZGUiLCJjbG9uZU5vZGUiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfdGhpcyIsImxpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW5kZXIiLCJub2RlIiwiZGVmYXVsdCIsIkZvcm1WYWxpZGF0b3IiLCJmb3JtRWxlbWVudCIsImZvcm1Db25maWciLCJfZm9ybUVsZW1lbnQiLCJfZm9ybUNvbmZpZyIsImZvcm0iLCJmb3JtSW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b24iLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImZvckVhY2giLCJpbnB1dEVsZW1lbnQiLCJldnQiLCJlcnJvck5vZGUiLCJjb25jYXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiYWRkIiwiaW5wdXRFcnJvckNsYXNzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJkaXNhYmxlZCIsIl9pc1ZhbGlkSW5wdXRzIiwiZW5hYmxlVmFsaWRhdGlvbiIsImV2ZXJ5IiwiaXRlbSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9kZWZpbmVQcm9wZXJ0eSIsImNsb3NlIiwiX3BvcHVwU2VsZWN0b3IiLCJzZXRFdmVudExpc3RlbmVycyIsIm9wZW4iLCJwb3B1cE9wZW4iLCJfaGFuZGxlRXNjQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3RoaXMyIiwiY2xvc2VCdXR0b24iLCJQb3B1cFdpdGhGb3JtIiwiX1BvcHVwIiwic2VsZWN0b3IiLCJoYW5kbGVTdWJtaXQiLCJfY2FsbFN1cGVyIiwiX2hhbmRsZVN1Ym1pdCIsIl9pbmhlcml0cyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjYWxsIiwicHJldmVudERlZmF1bHQiLCJnZXRJbnB1dFZhbHVlcyIsImlucHV0VmFsdWVzIiwiaW5wdXRGb3JtcyIsImVsZW1lbnRzIiwiZWxlbWVudCIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJzZXRBdHRyaWJ1dGUiLCJTZWN0aW9uIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsImFkZEl0ZW0iLCJhcHBlbmQiLCJVc2VySW5mbyIsImFib3V0IiwiX2Fib3V0IiwiZ2V0VXNlckluZm8iLCJzZXRVc2VySW5mbyIsIm9wZW5FZGl0QnV0dG9uIiwib3BlbkFkZEJ1dHRvbiIsInBvcHVwUHJvZmlsZSIsInBvcHVwUGxhY2UiLCJwb3B1cENsb3NlSWNvbiIsInByb2ZpbGVUZXh0IiwicHJvZmlsZVRpdGxlIiwibmFtZUlucHV0IiwiYWJvdXRNZUlucHV0IiwicGxhY2VJbnB1dCIsImxpbmtJbnB1dCIsImVsZW1lbnRzQXJlYSIsImRlbGV0ZUNhcmQiLCJpbWFnZVBvcHVwIiwicG9wdXBPdmVybGF5cyIsImluaXRpYWxDYXJkcyIsImZvcm1TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJlcnJvckNsYXNzIiwiY2xvc2VBbGxNb2RhbCIsImhhbmRsZUVzY1ByZXNzIiwiY3JlYXRlQ2FyZCIsInBvcHVwSW1hZ2UiLCJoYW5kbGVBZGRDYXJkIiwicHJlcGVuZCIsImhhbmRsZVByb2ZpbGVGb3JtU3VibWl0IiwiZm9ybVZhbGlkYXRvclByb2ZpbGUiLCJmb3JtVmFsaWRhdG9yQWRkQ2FyZCIsInVzZXJPYmpldCIsInVzZXJJbmZvIiwicG9wdXBBZGRDYXJkIiwiX3JlZjIiLCJwbGFjZSIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9