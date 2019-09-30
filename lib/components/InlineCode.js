"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineCode = _styledComponents2.default.code.attrs({
  spellCheck: false
}).withConfig({
  displayName: "InlineCode",
  componentId: "o8j0wt-0"
})(["background:", ";border-radius:4px;border:1px solid ", ";padding:3px 6px;font-family:\"Source Code Pro\",Menlo,monospace;font-size:85%;"], function (props) {
  return props.theme.codeBackground;
}, function (props) {
  return props.theme.codeBorder;
});
exports.default = InlineCode;