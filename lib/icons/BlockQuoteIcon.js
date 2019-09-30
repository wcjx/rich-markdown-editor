"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlockQuoteIcon;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BlockQuoteIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement("path", { d: "M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" })
  );
}