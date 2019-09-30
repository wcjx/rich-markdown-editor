"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NextIcon;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NextIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })
  );
}