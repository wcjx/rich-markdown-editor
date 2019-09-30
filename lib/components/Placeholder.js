"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Placeholder = _styledComponents2.default.span.attrs({
  contentEditable: false
}).withConfig({
  displayName: "Placeholder",
  componentId: "zq3any-0"
})(["pointer-events:none;display:inline-block;width:0;max-width:100%;white-space:nowrap;line-height:1.2em;color:", ";"], function (props) {
  return props.theme.placeholder;
});
exports.default = Placeholder;