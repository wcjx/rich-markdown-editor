"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlusIcon;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PlusIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" })
  );
}