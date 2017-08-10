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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var removeChild = exports.removeChild = function removeChild() {
    var el = document.getElementById('target');
    while (el.firstChild) {
        //The list is LIVE so it will re-index each call
        el.removeChild(el.firstChild);
    }
};

var render = exports.render = function render(data) {
    var el = document.getElementById('target');
    el.appendChild(data);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _appRouter = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.router = new _appRouter.AppRouter();
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      var _this = this;

      console.log('Application loaded at ' + Date.now());
      //register router
      this.router.route(event);

      window.addEventListener("hashchange", function (event) {
        console.log('hashchange');
        _this.router.route(event);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _homeController = __webpack_require__(3);

var _podTeamController = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppRouter = exports.AppRouter = function () {
    function AppRouter() {
        _classCallCheck(this, AppRouter);
    }

    _createClass(AppRouter, [{
        key: 'route',
        value: function route(event) {
            var route = location.hash.slice(1) || 'home';
            console.log(route);

            var temp = route.split('?');
            console.log(temp);
            //var route_split = temp.length;
            var function_to_invoke = temp[0] || false;
            var params = null;
            //if(route_split > 1){
            //   params  = extract_params(temp[1]);
            //}

            //fire 
            if (function_to_invoke) {
                switch (function_to_invoke) {
                    case 'home':
                        console.log('HomeController');
                        (0, _homeController.HomeController)(function_to_invoke, params);
                        break;
                    case 'podteam':
                        (0, _podTeamController.PodTeamController)(function_to_invoke, params);
                        break;
                    case 'mision':
                        console.log('Bananas are $0.48 a pound.');
                        break;
                    case 'goals':
                        console.log('Cherries are $3.00 a pound.');
                        break;
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                }
            }
        }
    }]);

    return AppRouter;
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HomeController = undefined;

var _home = __webpack_require__(4);

var _utils = __webpack_require__(0);

var HomeController = exports.HomeController = function HomeController(data, params) {
    var home = new _home.Home();
    (0, _utils.removeChild)();
    (0, _utils.render)(home.init());
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = exports.Home = function () {
  function Home() {
    _classCallCheck(this, Home);
  }

  _createClass(Home, [{
    key: 'init',
    value: function init() {
      var div = document.createElement('header');
      div.innerHTML = '     \n            <h1>Welcom to My PodJs!</h1>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe expedita doloribus, praesentium laboriosam. Vero non eius enim, vel sunt, facere voluptates hic omnis iure consequuntur itaque impedit ipsa. Esse, exercitationem!</p>\n\n        \n    ';

      return div;
    }
  }]);

  return Home;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PodTeamController = undefined;

var _view = __webpack_require__(6);

var _utils = __webpack_require__(0);

var _serviceLocalStorage = __webpack_require__(7);

var PodTeamController = exports.PodTeamController = function PodTeamController(data, params) {

    var storage = new _serviceLocalStorage.StorageService();
    var team = storage.getTeamMembers();

    (0, _utils.removeChild)();
    team.forEach(function (element) {
        var view = new _view.View(element);
        (0, _utils.render)(view.init());
    });
};

/***/ }),
/* 6 */
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
/* 7 */
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

        this.infoApp = new Object({
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
            mision: "WE WANT TO CHALLENGE THE STATUS QUO AND BECOME THE BEST COMPANY IN THE CREATION OF DIGITAL JOURNEYS, COMBINING THE BEST OF ENGINEERING, INNOVATION AND DESIGN.",
            vision: "AT GLOBANT. The best engineers team up with our art design studios and innovation labs to deliver a superb user experience through innovation, usability, scalability and availability",
            goald: "Our goal is to be the leader in the creation of digital journeys that matter to millions of users."
        });
        this.saveData();
    }

    _createClass(StorageService, [{
        key: 'saveData',
        value: function saveData() {
            console.log("Saving data");
            // Check browser support
            if (typeof Storage !== "undefined") {
                localStorage.setItem("team", JSON.stringify(this.infoApp.team));
                localStorage.setItem("mision", JSON.stringify(this.infoApp.mision));
                localStorage.setItem("vision", JSON.stringify(this.infoApp.vision));
                localStorage.setItem("goald", JSON.stringify(this.infoApp.goald));
            } else {
                document.getElementsByClassName("error").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
        }
    }, {
        key: 'getTeamMembers',
        value: function getTeamMembers() {
            return this.getItem('team');
        }
    }, {
        key: 'getMision',
        value: function getMision() {
            return this.getItem('mision');
        }
    }, {
        key: 'getVision',
        value: function getVision() {
            return this.getItem('vision');
        }
    }, {
        key: 'getGoald',
        value: function getGoald() {
            return this.getItem('goald');
        }
    }, {
        key: 'getItem',
        value: function getItem(name) {
            return JSON.parse(window.localStorage.getItem(name));
        }
    }]);

    return StorageService;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map