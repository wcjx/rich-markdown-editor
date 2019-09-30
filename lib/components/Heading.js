"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading6 = exports.Heading5 = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.StyledHeading = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require("../icons");

var _headingToSlug = require("../lib/headingToSlug");

var _headingToSlug2 = _interopRequireDefault(_headingToSlug);

var _CopyToClipboard = require("./CopyToClipboard");

var _CopyToClipboard2 = _interopRequireDefault(_CopyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Heading(props) {
  var node = props.node,
      editor = props.editor,
      readOnly = props.readOnly,
      children = props.children,
      _props$level = props.level,
      level = _props$level === undefined ? 1 : _props$level,
      attributes = props.attributes,
      className = props.className;


  var firstNode = editor.value.document.nodes.first() === node;
  var slugish = (0, _headingToSlug2.default)(editor.value.document, node);
  var showHash = readOnly && !!slugish;
  var Component = "h" + (level + (editor.props.headingsOffset || 0));
  var pretitle = editor.props.pretitle || "";
  var title = node.text.trim();
  var startsWithPretitleAndSpace = pretitle && title.match(new RegExp("^" + pretitle + "\\s"));
  var pathName = typeof window !== "undefined" ? window.location.pathname : "";
  var origin = typeof window !== "undefined" ? window.location.origin : "";
  var pathToHeading = pathName + "#" + slugish;
  var collapsed = node.data.get("collapsed");

  return React.createElement(
    Component,
    _extends({}, attributes, { className: className }),
    React.createElement(HiddenAnchor, { id: slugish }),
    React.createElement(
      CollapseToggle,
      {
        onClick: function onClick() {
          return editor.toggleContentBelow(node);
        },
        contentEditable: false,
        collapsed: collapsed,
        disabled: firstNode || !title
      },
      React.createElement(_icons.CollapsedIcon, null)
    ),
    React.createElement(
      Wrapper,
      { hasPretitle: firstNode && startsWithPretitleAndSpace },
      children
    ),
    showHash && React.createElement(
      Anchor,
      {
        name: slugish,
        onCopy: function onCopy() {
          return editor.props.onShowToast && editor.props.onShowToast("Link copied to clipboard");
        },
        text: "" + origin + pathToHeading
      },
      React.createElement(
        "span",
        null,
        "#"
      )
    )
  );
}

var CollapseToggle = _styledComponents2.default.a.withConfig({
  displayName: "Heading__CollapseToggle",
  componentId: "sc-11dvfr8-0"
})(["text-decoration:none;opacity:", ";pointer-events:", ";visibility:", ";user-select:none;cursor:pointer;width:24px;height:24px;svg{", ";fill:", ";transition:transform 100ms ease-in-out;}&:hover{text-decoration:none;svg{fill:", ";}}"], function (props) {
  return props.disabled ? "0" : "1";
}, function (props) {
  return props.disabled ? "none" : "all";
}, function (props) {
  return props.collapsed ? "visible" : "hidden";
}, function (props) {
  return props.collapsed && "transform: rotate(-90deg);";
}, function (props) {
  return props.collapsed ? props.theme.text : props.theme.placeholder;
}, function (props) {
  return props.theme.text;
});

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: "Heading__Wrapper",
  componentId: "sc-11dvfr8-1"
})(["display:inline;margin-left:", ";"], function (props) {
  return props.hasPretitle ? "-1.2em" : 0;
});

var HiddenAnchor = _styledComponents2.default.a.withConfig({
  displayName: "Heading__HiddenAnchor",
  componentId: "sc-11dvfr8-2"
})(["visibility:hidden;display:block;position:relative;top:-50px;"]);

var Anchor = (0, _styledComponents2.default)(_CopyToClipboard2.default).withConfig({
  displayName: "Heading__Anchor",
  componentId: "sc-11dvfr8-3"
})(["visibility:hidden;padding-left:0.25em;"]);

var StyledHeading = exports.StyledHeading = (0, _styledComponents2.default)(Heading).withConfig({
  displayName: "Heading__StyledHeading",
  componentId: "sc-11dvfr8-4"
})(["display:flex;align-items:center;position:relative;margin-left:-24px;&:hover{", "{visibility:visible;}", "{color:", ";visibility:visible;text-decoration:none;cursor:pointer;&:hover{color:", ";}}}"], CollapseToggle, Anchor, function (props) {
  return props.theme.placeholder;
}, function (props) {
  return props.theme.text;
});
var Heading1 = exports.Heading1 = function Heading1(props) {
  return React.createElement(StyledHeading, _extends({ level: 1 }, props));
};
var Heading2 = exports.Heading2 = function Heading2(props) {
  return React.createElement(StyledHeading, _extends({ level: 2 }, props));
};
var Heading3 = exports.Heading3 = function Heading3(props) {
  return React.createElement(StyledHeading, _extends({ level: 3 }, props));
};
var Heading4 = exports.Heading4 = function Heading4(props) {
  return React.createElement(StyledHeading, _extends({ level: 4 }, props));
};
var Heading5 = exports.Heading5 = function Heading5(props) {
  return React.createElement(StyledHeading, _extends({ level: 5 }, props));
};
var Heading6 = exports.Heading6 = function Heading6(props) {
  return React.createElement(StyledHeading, _extends({ level: 6 }, props));
};