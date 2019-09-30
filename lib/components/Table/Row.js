"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var StyledTr = _styledComponents2.default.tr.withConfig({
  displayName: "Row__StyledTr",
  componentId: "sc-1js5ndd-0"
})(["position:relative;border-bottom:1px solid ", ";"], function (props) {
  return props.theme.tableDivider;
});

var Row = function Row(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;

  return React.createElement(
    StyledTr,
    attributes,
    children
  );
};

exports.default = Row;