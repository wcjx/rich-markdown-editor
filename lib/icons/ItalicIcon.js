"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ItalicIcon;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ItalicIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement("path", { d: "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" })
  );
}