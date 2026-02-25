/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/oop.ts"
/*!***********************!*\
  !*** ./src/js/oop.ts ***!
  \***********************/
() {

eval("{var __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n    return extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nvar User = /** @class */function () {\n  //protected _age: - модификация доступа (снаружи недоступны, но наследуются; privet - недоступны и ненаследуемые)\n  function User(name, gender, _age) {\n    this.name = name;\n    this._age = _age;\n    this.gender = gender;\n  }\n  //age? - необязательный параметр ОПЦИОНАЛЬНЫЙ\n  User.prototype.showInfo = function () {\n    console.log(\"my name is \".concat(this.name, \", i'm \").concat(this._age, \" years old\"));\n  };\n  User.prototype.toString = function () {\n    return \"\".concat(this.name, \": \").concat(this._age);\n  };\n  Object.defineProperty(User.prototype, \"age\", {\n    get: function () {\n      return this._age;\n    },\n    //МОДИФИКАТОРЫ ДОСТУПА\n    set: function (n) {\n      this._age = n;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return User;\n}();\nvar user = new User(\"Ivan Ivanov\", \"male\");\n/*user.name = \"Ivan Ivanov\";\nuser.age = 25;*/\nuser.age = 25;\nconsole.log(user.age);\nuser.showInfo();\nconsole.log(user.toString());\n//user.gender = \"female\"; - ошибка. ТОЛЬКО для чтения. НЕЛЬЗЯ менять READONLY\n//НАСЛЕДОВАНИЕ\nvar Employee = /** @class */function (_super) {\n  __extends(Employee, _super);\n  function Employee(name, gender, age) {\n    return _super.call(this, name, gender, age) || this;\n  }\n  //переопределение метода\n  Employee.prototype.toString = function () {\n    console.log(_super.prototype.toString.call(this)); //метод базового класса\n    return \"\".concat(this.name, \": \").concat(this._age, \": \").concat(this.compony);\n  };\n  Employee.calculateYears = function (age) {\n    return Employee.retirementAge - age;\n  };\n  // СТАТИЧЕСКИЕ ПОЛЯ И МЕТОДЫ\n  Employee.retirementAge = 65;\n  return Employee;\n}(User);\nvar worker = new Employee(\"Sergei Morozov\", \"male\", 45);\nworker.compony = \"Amazon\";\nconsole.log(worker.toString());\n//ОБСТРАКТНЫЕ КЛАССЫ\nvar Figure = /** @class */function () {\n  function Figure() {}\n  Figure.prototype.showName = function () {\n    console.log(this.name);\n  };\n  return Figure;\n}();\nvar Rectangle = /** @class */function (_super) {\n  __extends(Rectangle, _super);\n  function Rectangle(width, height) {\n    var _this = _super.call(this) || this;\n    _this.width = width;\n    _this.height = height;\n    return _this;\n  }\n  Rectangle.prototype.getArea = function () {\n    return this.width * this.height;\n  };\n  return Rectangle;\n}(Figure);\nvar rect = new Rectangle(100, 30);\nconsole.log(\"Rectangle area = \".concat(rect.getArea()));\nconsole.log(Employee.calculateYears(37));\nvar employee = {\n  id: 1,\n  name: \"Tom\"\n};\nvar Sedan = /** @class */function () {\n  function Sedan(id, name, weight) {\n    this.id = id;\n    this.name = name;\n    this.weight = weight;\n  }\n  Sedan.prototype.showInfo = function () {\n    console.log(\"\".concat(this.name));\n  };\n  return Sedan;\n}();\nvar Vehicle = /** @class */function () {\n  function Vehicle(id, name, weight) {\n    this.id = id;\n    this.name = name;\n    this.weight = weight;\n  }\n  Vehicle.prototype.showInfo = function () {\n    console.log(\"\".concat(this.name));\n  };\n  return Vehicle;\n}();\nvar car1 = new Sedan(1, \"ford\", 1340);\nvar car2 = new Vehicle(2, \"maz\", 15000);\nfunction showCarInfo(car) {\n  car.showInfo();\n}\nshowCarInfo(car1);\nshowCarInfo(car2);\nvar simpleBuilder = function (name, surname) {\n  return \"\".concat(name, \" \").concat(surname);\n};\nconsole.log(simpleBuilder(\"Nataliya\", \"Savchenko\"));\nvar addresses = [\"адрес 1\", \"адрес 2\"];\nvar colors;\ncolors[\"red\"] = \"#ff0000\";\ncolors[\"green\"] = \"#00ff00\";\ncolors[\"blue\"] = \"#0000ff\";\nconsole.log(colors[\"red\"]);\n/*let colors = {\n    red = \"#ff0000\",\n    green = \"#00ff00\",\n}*/\n//Преобразование типов\nvar tom = new Employee(\"Tom Soyer\", \"male\");\nvar employeeTom = tom;\nemployeeTom.compony = \"Amazon\";\n\n//# sourceURL=webpack://typescript/./src/js/oop.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/oop.ts"].call(__webpack_exports__);
/******/ 	
/******/ })()
;