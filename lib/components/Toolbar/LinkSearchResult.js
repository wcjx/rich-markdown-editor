"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require("../../icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkSearchResult = function (_React$Component) {
  _inherits(LinkSearchResult, _React$Component);

  function LinkSearchResult() {
    _classCallCheck(this, LinkSearchResult);

    return _possibleConstructorReturn(this, (LinkSearchResult.__proto__ || Object.getPrototypeOf(LinkSearchResult)).apply(this, arguments));
  }

  _createClass(LinkSearchResult, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          rest = _objectWithoutProperties(_props, ["title"]);

      return React.createElement(
        ListItem,
        _extends({}, rest, { href: "" }),
        React.createElement(
          "i",
          null,
          React.createElement(_icons.NextIcon, { light: true })
        ),
        title
      );
    }
  }]);

  return LinkSearchResult;
}(React.Component);

var ListItem = _styledComponents2.default.a.withConfig({
  displayName: "LinkSearchResult__ListItem",
  componentId: "sc-2dnaal-0"
})(["display:flex;align-items:center;height:28px;padding:6px 8px 6px 0;color:", ";font-family:", ";font-size:15px;text-decoration:none;overflow:hidden;white-space:nowrap;i{visibility:hidden;}&:hover,&:focus,&:active{font-weight:500;outline:none;i{visibility:visible;}}"], function (props) {
  return props.theme.toolbarItem;
}, function (props) {
  return props.theme.fontFamily;
});

exports.default = LinkSearchResult;