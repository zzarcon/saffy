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

	/**
	 * TODO: Check if arguments are valid.
	 *  
	 * @param  {Object} obj     
	 * @param  {String} keyName 
	 * @return {Mixed}         
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _arguments2 = arguments;
	var get = function get(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var obj = _x,
	        keyName = _x2;
	    _again = false;

	    if (_arguments2.length < 2 || typeof keyName !== 'string') return;

	    var properties = keyName.split('.');

	    if (properties.length === 1) {
	      return obj[keyName];
	    }

	    var firstProp = properties.shift();
	    var nextObj = obj[firstProp];
	    var nextProps = properties.join('.');

	    if (nextObj) {
	      _x = nextObj;
	      _x2 = nextProps;
	      _again = true;
	      properties = firstProp = nextObj = nextProps = undefined;
	      continue _function;
	    } else {
	      return undefined;
	    }
	  }
	};

	var set = function set() {};

	exports['default'] = {
	  get: get,
	  set: set
	};
	module.exports = exports['default'];

/***/ }
/******/ ])
});
