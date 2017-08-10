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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = __webpack_require__(1);

var _serviceLocalStorage = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.el = document.getElementById('target');
    this.storage = new _serviceLocalStorage.StorageService();
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      console.log('runnig!');
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this = this;

      var data = this.storage.getItems();
      data.team.forEach(function (element) {
        var view = new _view.View(element);
        view.render(_this.el);
      });
    }
  }]);

  return App;
}();

var app = new App();
window.addEventListener('load', function () {
  return app.init();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = exports.View = function () {
  function View(dataMember) {
    _classCallCheck(this, View);

    this.member = dataMember;
  }

  _createClass(View, [{
    key: 'init',
    value: function init() {
      var div = document.createElement('div');
      div.innerHTML = '\n         <div>\n          <img class="img-circle" src="' + this.member.photoUrl + '" alt="Generic placeholder image" width="140" height="140">\n          <h2>' + this.member.firstName + ' ' + this.member.lastName + ' </h2>\n          <p><strong>Email:</strong>  ' + this.member.email + '</p> \n          <h4>Role</h4>\n          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n          <p><a class="btn btn-default" href="#" role="button">View details \xBB</a></p>\n        </div>\n    ';

      return div;
    }
  }, {
    key: 'render',
    value: function render(element) {
      element.appendChild(this.init());
    }
  }]);

  return View;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StorageService = exports.StorageService = function () {
    function StorageService() {
        _classCallCheck(this, StorageService);

        this.team = new Object({
            team: [{
                id: 2,
                firstName: 'Jack',
                lastName: 'Sprout',
                email: 'jack.sprout@gmail.com',
                role: 'owner',
                photoUrl: 'http://cdn.20m.es/img2/recortes/2012/06/26/66866-640-360.jpg'
            }, {
                id: 2,
                firstName: 'Kenny ',
                lastName: 'McCormick',
                email: 'jack.sprout@gmail.com',
                role: 'owner',
                photoUrl: 'https://vignette2.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
            }, {
                id: 2,
                firstName: 'Stan ',
                lastName: 'Marsh',
                email: 'jack.sprout@gmail.com',
                role: 'owner',
                photoUrl: 'https://vignette2.wikia.nocookie.net/southpark/images/a/a7/StanMarsh.png/revision/latest?cb=20160918033335'
            }],
            mision: "",
            vision: ""
        });
    }

    _createClass(StorageService, [{
        key: 'getItems',
        value: function getItems() {
            return this.team;
        }
    }]);

    return StorageService;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map