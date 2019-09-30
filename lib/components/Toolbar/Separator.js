"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Separator = _styledComponents2.default.div.withConfig({
  displayName: "Separator",
  componentId: "lxsars-0"
})(["height:100%;width:1px;background:", ";opacity:0.2;display:inline-block;margin-left:10px;"], function (props) {
  return props.theme.toolbarItem;
});
exports.default = Separator;