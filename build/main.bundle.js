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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var teamView = exports.teamView = function teamView(person) {
    return "\n        <div>\n            <section> \n            <img class=\"img-circle\" src=\"" + person.photoUrl + "\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n            <h2>" + person.firstName + " " + person.lastName + " </h2>\n            <p><strong>Email:</strong>  " + person.email + "</p> \n            <h4>Role</h4>\n            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n            <p><a class=\"btn-link\" href=\"#/team/" + person.id + "\" role=\"button\">View details \xBB</a></p>\n            </section>\n        </div>\n    ";
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TeamService = exports.TeamService = function () {
    function TeamService() {
        _classCallCheck(this, TeamService);

        this.API_URL = 'data.json';
    }

    _createClass(TeamService, [{
        key: 'getTeam',
        value: function getTeam() {
            return fetch(this.API_URL).then(this.handleErrors).then(function (res) {
                return res.json();
            });
        }
    }, {
        key: 'getPerson',
        value: function getPerson(id) {
            console.log('Finding ' + id);

            return fetch('' + this.API_URL).then(this.handleErrors).then(function (res) {
                return res.json();
            }).then(function (data) {
                return data.team.filter(function (data) {
                    return data.id == id;
                });
            });
        }
    }, {
        key: 'handleErrors',
        value: function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }
    }]);

    return TeamService;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(3);

var _router = __webpack_require__(4);

var _navbar = __webpack_require__(5);

var _footer = __webpack_require__(6);

var _home = __webpack_require__(7);

var _team = __webpack_require__(8);

var _person = __webpack_require__(9);

var _misionVision = __webpack_require__(10);

var _contactus = __webpack_require__(12);

var _canvas = __webpack_require__(13);

var _robot = __webpack_require__(14);

var app = new _app.App();
var router = new _router.Router(app);

app.addNavBar(new _navbar.NavBar());
app.addFooter(new _footer.Footer());

app.addComponent(new _home.Home());
app.addComponent(new _team.Team());
app.addComponent(new _person.Person());
app.addComponent(new _misionVision.MisionVision());
app.addComponent(new _contactus.ContactUs(app));

var canvas = new _canvas.Canvas(125, 145, 'canvas');
var robot = new _robot.Robot(canvas.getCanvas(), canvas.getContext());

router.addRoute('home', '^$');
router.addRoute('home', '^#/home$');

router.addRoute('team', '^#/team$');
router.addRoute('teamperson', '^#/team/([0-9]*)$');

router.addRoute('misionVision', '^#/mision$');
router.addRoute('contactus', '^#/contactus$');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
    function App() {
        _classCallCheck(this, App);

        this.navElement = document.getElementById('header');
        this.footerElement = document.getElementById('main-footer');

        this.appElement = document.getElementById('main');

        this.componentsByName = [];
    }

    _createClass(App, [{
        key: 'addNavBar',
        value: function addNavBar(navbar) {
            this.navElement.innerHTML = navbar.view();
        }
    }, {
        key: 'addFooter',
        value: function addFooter(footer) {
            this.footerElement.innerHTML = footer.view();
        }
    }, {
        key: 'addComponent',
        value: function addComponent(component) {
            this.componentsByName[component.name] = component;
            component.model = this.proxify(component.model);
        }
    }, {
        key: 'addParams',
        value: function addParams(params) {
            this.params = params;
        }
    }, {
        key: 'showComponent',
        value: function showComponent(name) {
            this.currentComponent = this.componentsByName[name];

            if (this.currentComponent) {
                this.currentComponent.controller(this.params);
            }
            this.updateView();
        }
    }, {
        key: 'getComponentByName',
        value: function getComponentByName(component) {
            return this.componentsByName[component];
        }
    }, {
        key: 'updateView',
        value: function updateView() {
            if (this.currentComponent) {
                this.appElement.innerHTML = this.currentComponent.view();
            } else {
                this.appElement.innerHTML = '<h1>Not Found</h1>';
            }
        }
    }, {
        key: 'proxify',
        value: function proxify(model) {
            var self = this;
            return new Proxy(model, {
                set: function set(target, property, value) {
                    console.log('Model Changed! ' + model);
                    target[property] = value;
                    self.updateView();
                    return true;
                }
            });
        }
    }]);

    return App;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = exports.Router = function () {
    function Router(app) {
        _classCallCheck(this, Router);

        this.app = app;
        this.routes = [];
        this.hashChange = this.hashChange.bind(this);
        window.addEventListener('hashchange', this.hashChange);
        window.addEventListener('DOMContentLoaded', this.hashChange);
    }

    _createClass(Router, [{
        key: 'addRoute',
        value: function addRoute(name, url) {
            this.routes.push({
                name: name,
                url: url
            });
        }
    }, {
        key: 'hashChange',
        value: function hashChange() {
            var hash = window.location.hash;
            var route = this.routes.filter(function (route) {
                return hash.match(new RegExp(route.url));
            })[0];

            if (route) {
                this.params = new RegExp(route.url).exec(hash);
                this.app.addParams(this.params);
                this.app.showComponent(route.name);
            } else {
                this.app.showComponent();
            }
        }
    }]);

    return Router;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavBar = exports.NavBar = function () {
    function NavBar() {
        _classCallCheck(this, NavBar);
    }

    _createClass(NavBar, [{
        key: "view",
        value: function view() {
            return "\n                <div class=\"container\" id=\"myTopnav\">\n                    <a href=\"index.html\" class=\"logo\">Globant PodsUI</a>\n                    <nav>\n                        <ul>\n                            <li> <a href=\"#/home\">Home</a></li>\n                            <li> <a href=\"#/team\">Pod Team</a></li>\n                            <li> <a href=\"#/mision\">Mision/vision</a></li> \n                            <li> <a href=\"#/goals\">Goals</a></li>  \n                            <li> <a href=\"#/contactus\">contactus</a></li>                      \n                        </ul>                       \n                    </nav>\n                     <div class=\"icon-hamburger\" onclick=\"myFunction()\">&#9776;</div>\n                </div>\n           \n        \n         \n        ";
        }
    }]);

    return NavBar;
}();

/*

<div class="inner">
				<a href="index.html" class="logo">Globant PodsUI</a>
                <nav>
                    <ul>
                        <li> <a href="#/home">Home</a></li>
                        <li> <a href="#/team">Pod Team</a></li>
                        <li> <a href="#/mision">Mision/vision</a></li> 
                        <li> <a href="#/goals">Goals</a></li>                      
                    </ul>
                </nav>
            </div> 
            */

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = exports.Footer = function () {
    function Footer() {
        _classCallCheck(this, Footer);

        this.name = 'mainFooter';
    }

    _createClass(Footer, [{
        key: 'view',
        value: function view() {
            return '             \n                \n                    <div>\n                        <img src="https://www.globant.com/sites/default/files/static-pages/globant-light.svg" alt="Globant">\n                    </div>\n                    \n               \n           \n\n        ';
        }
    }]);

    return Footer;
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

var Home = exports.Home = function () {
    function Home() {
        _classCallCheck(this, Home);

        this.name = 'home';
        this.model = {
            home: []
        };
    }

    _createClass(Home, [{
        key: 'view',
        value: function view() {
            return '\n            <div>\n            <section class="home">\n                <div>                    \n                    <article>\n                        <header>\n                            <h1>Welcome to My PodJs!</h1>\n                        </header>\n                        <footer>\n                            <p>Integer adipiscin sem. Nullam quis massa sit amet</p>\n                        </footer>\n                        <content>\n                            <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. \n                            Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, \n                            faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida \n                            tristique. Nunc iaculis mi in ante.\n                            </p> \n                        </content>\n                    </article> \n                    <article>\n                        <header>\n                            <h1>Welcom to My PodJs!</h1>\n                        </header>\n                        <footer>\n                            <p>Integer adipiscin sem. Nullam quis massa sit amet</p>\n                        </footer>\n                        <content>\n                            <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. \n                            Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, \n                            faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida \n                            tristique. Nunc iaculis mi in ante.\n                            </p> \n                        </content>\n                    </article> \n                                     \n                </div>\n                <aside class="home-sidebar">\n                        <header>\n                            <h1>News in My PodJs!</h1>\n                        </header>\n                        <footer>\n                            <p>Integer adipiscin sem. Nullam quis massa sit amet</p>\n                        </footer>\n                        <content>\n                            <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. \n                            Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, \n                            faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida \n                            tristique. Nunc iaculis mi in ante.\n                            </p> \n                        </content>\n                    </aside>\n                \n            </section>\n            \n            </div>\n        ';
        }
    }, {
        key: 'controller',
        value: function controller() {}
    }]);

    return Home;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Team = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _teamView = __webpack_require__(0);

var _teamService = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Team = exports.Team = function () {
    function Team() {
        _classCallCheck(this, Team);

        this.service = new _teamService.TeamService();

        this.name = 'team';
        this.model = {
            team: []
        };
    }

    _createClass(Team, [{
        key: 'view',
        value: function view() {

            var teamHtml = this.model.team.reduce(function (prev, person) {
                return prev + (0, _teamView.teamView)(person);
            }, '');
            return '<div class="team-members">' + teamHtml + '</div>';
        }
    }, {
        key: 'controller',
        value: function controller() {
            var _this = this;

            this.service.getTeam().then(function (result) {
                _this.model.team = result.team || [];
            }).catch(function (error) {
                return console.log(error);
            });
        }
    }]);

    return Team;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Person = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _teamView = __webpack_require__(0);

var _teamService = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
    function Person() {
        _classCallCheck(this, Person);

        this.service = new _teamService.TeamService();

        this.name = 'teamperson';
        this.model = {
            person: []
        };
    }

    _createClass(Person, [{
        key: 'view',
        value: function view() {
            var fullPerson = this.model.person.reduce(function (prev, person) {
                return prev + (0, _teamView.teamView)(person);
            }, '');
            return '' + fullPerson;
        }
    }, {
        key: 'controller',
        value: function controller(params) {
            var _this = this;

            console.log('Paramms to fin ' + params);
            this.service.getPerson(params[1]).then(function (result) {
                console.log(result);
                _this.model.person = result || [];
            }).catch(function (error) {
                return console.log(error);
            });
        }
    }]);

    return Person;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MisionVision = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misionVisionView = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MisionVision = exports.MisionVision = function () {
    function MisionVision() {
        _classCallCheck(this, MisionVision);

        this.name = 'misionVision';
        this.model = {
            home: []
        };
    }

    _createClass(MisionVision, [{
        key: 'view',
        value: function view() {
            return '' + (0, _misionVisionView.misionVision)();
        }
    }, {
        key: 'controller',
        value: function controller() {}
    }]);

    return MisionVision;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var misionVision = exports.misionVision = function misionVision() {
    return "\n       <div>\n        <section class=\"misionvision title text-center\">\n                <div>\n                    <h1 class=\"blown-up\">Our Vision</h1>\n                     \n                    <img src=\" https://www.globant.com/sites/default/files/static-pages/node-104.jpg\" alt=\"vision-mision\">                        \n                    \n                </div>\n              \n                <div class=\"text-center\">\n                    <h3 class=\"excerpt\">WE WANT TO CHALLENGE THE STATUS QUO AND BECOME THE BEST COMPANY IN THE CREATION OF DIGITAL JOURNEYS, COMBINING THE BEST OF ENGINEERING, INNOVATION AND DESIGN.</h3>\n                    <p class=\"header-text\">Our goal is to be the leader in the creation of digital journeys that matter to millions of users.</p>\n                </div>\n                <br/>                        \n\n        </section>\n        </div>\n    \n    ";
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactUs = exports.ContactUs = function () {
    function ContactUs() {
        _classCallCheck(this, ContactUs);

        this.name = 'contactus';
        this.model = {
            contact: []
        };
    }

    _createClass(ContactUs, [{
        key: 'sendMessage',
        value: function sendMessage() {
            //event.preventDefault();
            console.log('save!');
        }
    }, {
        key: 'view',
        value: function view() {
            return '\n                <div class="container"> \n                    <header>\n\t\t\t\t\t\t<h2>Get in Touch</h2>\n\t\t\t\t\t</header>\n                    <form action="post" onsubmit="this.app.getComponentByName(\'contactus\').sendMessage(event)" >\n                        <label for="fname"> Name</label>\n                        <input type="text" id="fname" name="firstname" placeholder="Your name..">\n\n                        <label for="email">Email</label>\n                        <input type="text" id="email" name="lastname" placeholder="Your email..">\n\n                        <label for="message">Message</label>\n                        <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>\n\n                        <input type="button" onclick="sendMessage()" value="Send Message">\n                    </form>\n                </div>\n\n        ';
        }
    }, {
        key: 'controller',
        value: function controller() {}
    }]);

    return ContactUs;
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = exports.Canvas = function () {
  function Canvas(width, height, nameCanvas) {
    _classCallCheck(this, Canvas);

    this.canvas = document.getElementById(nameCanvas);
    canvas.width = width;
    canvas.height = height;
    this.context = canvas.getContext('2d');
  }

  _createClass(Canvas, [{
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }]);

  return Canvas;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Robot = exports.Robot = function () {
	function Robot(canvas, context) {
		_classCallCheck(this, Robot);

		this.context = context;
		this.canvas = canvas;
		this.canvas.addEventListener("mousemove", this.sayHello.bind(this), false);
		this.drawRobot(this.context);
		this.sayHelloBoll = true;
	}

	_createClass(Robot, [{
		key: 'drawRobot',
		value: function drawRobot(context) {
			this.drawHead(context);
			this.drawEye(context);
			this.drawBody(context);
			this.drawLeftArm(context);
			this.drawRightArm(context);
			this.drawRightLeg(context);
			this.drawLeftLeg(context);
		}
	}, {
		key: 'drawHead',
		value: function drawHead(context) {
			context.beginPath();
			context.fillStyle = '#1c1c1c';
			context.rect(40, 5, 38, 30); // head
			context.fill();
			context.closePath();
		}
	}, {
		key: 'drawEye',
		value: function drawEye(context) {
			context.beginPath();
			context.fillStyle = '#e5474b';
			context.arc(50, 17, 5, 0, 2 * Math.PI, false);
			context.arc(67, 17, 5, 0, 2 * Math.PI, false);
			context.fill();
			context.closePath();
		}
	}, {
		key: 'drawBody',
		value: function drawBody(context) {
			context.beginPath();
			context.fillStyle = '#1c1c1c';
			context.rect(33, 37, 50, 50); // body
			context.fill();
			context.closePath();
		}
	}, {
		key: 'drawBody',
		value: function drawBody(context) {
			context.beginPath();
			context.fillStyle = '#1c1c1c';
			context.rect(33, 37, 50, 50); // body
			context.fill();
			context.closePath();
		}
	}, {
		key: 'drawLeftArm',
		value: function drawLeftArm(context) {
			context.beginPath();
			context.fillStyle = '#1c1c1c';
			context.rect(18, 37, 12, 37); // left arm
			context.fill();
			context.closePath();
		}
	}, {
		key: 'drawRightArm',
		value: function drawRightArm(context) {
			context.beginPath();
			context.fillStyle = '#1c1c1c';
			context.rect(86, 37, 12, 37); // right arm
			context.fill();
			context.closePath();
		}
	}, {
		key: 'drawLeftLeg',
		value: function drawLeftLeg(context) {
			context.beginPath();
			context.fillStyle = '#1c1c1c';
			context.rect(38, 90, 16, 50); // left leg
			context.fill();
			context.closePath();
		}
	}, {
		key: 'drawRightLeg',
		value: function drawRightLeg(context) {
			context.beginPath();
			context.fillStyle = '#1c1c1c';
			context.rect(60, 90, 16, 50); // right leg
			context.fill();
			context.closePath();
		}
	}, {
		key: 'sayHello',
		value: function sayHello(e) {
			console.log(e);
			console.log(e.x);
			console.log(this.canvas.height);
			console.log(this.canvas.width);

			console.log(e.y <= this.canvas.height && e.x <= this.canvas.width);

			//if(e.y <= this.canvas.height && e.x <= this.canvas.width ){
			if (this.sayHelloBoll) {
				this.clearRect(86, 37, 12, 37); // right arm
				this.raisearm(this.context);

				this.sayHelloBoll = !this.sayHelloBoll;
			} else {
				this.clearRect(86, 37, 37, 12);
				this.drawRightArm(this.context);
				this.sayHelloBoll = !this.sayHelloBoll;
			}
		}
	}, {
		key: 'clearRect',
		value: function clearRect(x, y, w, h) {
			this.context.clearRect(x, y, w, h);
		}
	}, {
		key: 'raisearm',
		value: function raisearm(context) {
			context.clearRect(86, 37, 12, 37); // right arm
			context.beginPath();
			context.fillStyle = '#e5474b';
			context.fillRect(86, 37, 37, 12);
			context.fill();
			context.closePath();
		}
	}]);

	return Robot;
}();

/***/ })
/******/ ]);