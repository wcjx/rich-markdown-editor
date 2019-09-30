"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HorizontalRuleIcon;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HorizontalRuleIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement("path", { d: "M3,5H21V7H3V5M3,11V9H21V11H3M3,19V13H21V19H3Z" })
  );
}