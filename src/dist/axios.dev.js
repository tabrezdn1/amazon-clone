"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-da269/us-central1/api/test' // "http://localhost:5001/clone-da269/us-central1/api/test",

});

var _default = instance;
exports["default"] = _default;