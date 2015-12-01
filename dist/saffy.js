(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["saffy"] = factory();
	else
		root["saffy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8090/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _arguments2 = arguments;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isobject = __webpack_require__(1);

	var _isobject2 = _interopRequireDefault(_isobject);

	/**
	 * TODO: Check if arguments are valid.
	 *  
	 * @param  {Object} obj     
	 * @param  {String} keyName 
	 * @param  {Mixed} defaultValue 
	 * @return {Mixed}         
	 */
	var get = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var obj = _x,
	        keyName = _x2,
	        defaultValue = _x3;
	    _again = false;

	    if (_arguments2.length < 2 || !isString(keyName)) return;

	    var properties = keyName.split('.');

	    if (properties.length === 1) {
	      var val = getProp(obj, keyName);

	      return val ? val : defaultValue;
	    }

	    var _getNextValues = getNextValues(obj, properties);

	    var nextObj = _getNextValues.nextObj;
	    var nextProps = _getNextValues.nextProps;
	    if (nextObj) {
	      _x = nextObj;
	      _x2 = nextProps;
	      _x3 = defaultValue;
	      _again = true;
	      properties = val = _getNextValues = nextObj = nextProps = undefined;
	      continue _function;
	    } else {
	      return defaultValue;
	    }
	  }
	};

	/**
	 * TODO: Check if arguments are valid.
	 * 
	 * @param  {Object} obj     
	 * @param  {String} keyName 
	 * @param  {Mixed} value   
	 * @return {Mixed}  Returns the passed value
	 */
	var set = function set(_x4, _x5, _x6) {
	  var _again2 = true;

	  _function2: while (_again2) {
	    var obj = _x4,
	        keyName = _x5,
	        value = _x6;
	    _again2 = false;

	    if (_arguments2.length < 3 || !isString(keyName)) return;

	    var properties = keyName.split('.');

	    if (properties.length === 1) {
	      obj[keyName] = value;
	      return value;
	    }

	    var _getNextValues2 = getNextValues(obj, properties);

	    var nextObj = _getNextValues2.nextObj;
	    var nextProps = _getNextValues2.nextProps;
	    if ((0, _isobject2['default'])(nextObj)) {
	      _x4 = nextObj;
	      _x5 = nextProps;
	      _x6 = value;
	      _again2 = true;
	      properties = _getNextValues2 = nextObj = nextProps = undefined;
	      continue _function2;
	    } else {
	      return value;
	    }
	  }
	};

	var getNextValues = function getNextValues(obj, properties) {
	  var first = properties.shift();

	  return {
	    nextObj: getProp(obj, first),
	    nextProps: properties.join('.')
	  };
	};

	/**
	 * 
	 * @param  {Obj} obj  
	 * @param  {String} prop 
	 * @return {Mixed}      
	 */
	var getProp = function getProp(obj, prop) {
	  var val = obj[prop];

	  if (prop === 'firstObject' && Array.isArray(obj)) {
	    val = obj[0];
	  }

	  return val;
	};

	var isString = function isString(value) {
	  return typeof value === 'string';
	};

	exports['default'] = {
	  get: get,
	  set: set
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */

	'use strict';

	var isArray = __webpack_require__(2);

	module.exports = function isObject(o) {
	  return o != null && typeof o === 'object' && !isArray(o);
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }
/******/ ])
});
