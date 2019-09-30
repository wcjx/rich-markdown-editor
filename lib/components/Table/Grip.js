"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grip = _styledComponents2.default.a.withConfig({
  displayName: "Grip",
  componentId: "k3l5h5-0"
})(["position:absolute;cursor:pointer;background:", ";", " &:hover{background:", ";}"], function (props) {
  return props.isSelected ? props.theme.tableSelected : props.theme.tableDivider;
}, function (props) {
  return props.isSelected && "opacity: 1 !important;";
}, function (props) {
  return props.isSelected ? props.theme.tableSelected : props.theme.tableSelected;
});
exports.default = Grip;