"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InsertAboveIcon;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InsertAboveIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement("path", { d: "M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z" })
  );
}