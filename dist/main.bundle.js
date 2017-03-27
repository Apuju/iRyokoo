/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _commonLib = __webpack_require__(1);
	
	var _menuLib = __webpack_require__(2);
	
	var MenuLib = _interopRequireWildcard(_menuLib);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	(function (w, a) {
	  var oUtil = new a();
	  var strPageName = oUtil.getQueryStringParameter("page");
	  var oScript = w.document.createElement("script");
	  oScript.setAttribute("src", "dist/" + MenuLib.getMenuNameByMD5() + ".bundle.js");
	  w.document.getElementsByTagName('body')[0].appendChild(oScript);
	})(window, _commonLib.Apuju);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Apuju = exports.Apuju = function () {
		function Apuju() {
			_classCallCheck(this, Apuju);
	
			this.w = window;
		}
	
		_createClass(Apuju, [{
			key: "getQueryStringParameter",
			value: function getQueryStringParameter(key) {
				var strParameter = "";
				var arrQueryVariables = this.w.location.search.substring(1).split('&');
				arrQueryVariables.forEach(function (ele) {
					var arrParameter = ele.split("=");
					if (arrParameter[0] === key) {
						strParameter = arrParameter[1];
						return arrParameter[1];
					}
				});
				return strParameter;
			}
		}, {
			key: "isDebugMode",
			get: function get() {
				if ((true) === "true" || (true) === true) return true;else return false;
			}
		}]);

		return Apuju;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMenuNameByMD5 = getMenuNameByMD5;
	
	var _menuMD5Config = __webpack_require__(3);
	
	var _menuMD5Config2 = _interopRequireDefault(_menuMD5Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getMenuNameByMD5() {
	  return "menu";
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  key: menu,
	  value: "menu"
	}];

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map