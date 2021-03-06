"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InsertLeftIcon;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InsertLeftIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement("path", { d: "M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z" })
  );
}