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

var _CopyToClipboard = require("./CopyToClipboard");

var _CopyToClipboard2 = _interopRequireDefault(_CopyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyButton = function (_React$Component) {
  _inherits(CopyButton, _React$Component);

  function CopyButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CopyButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CopyButton.__proto__ || Object.getPrototypeOf(CopyButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = { copied: false }, _this.handleCopy = function () {
      _this.setState({ copied: true });
      _this.copiedTimeout = setTimeout(function () {
        return _this.setState({ copied: false });
      }, 3000);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CopyButton, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.copiedTimeout) clearTimeout(this.copiedTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        StyledCopyToClipboard,
        _extends({ onCopy: this.handleCopy }, this.props),
        React.createElement(
          "span",
          null,
          this.state.copied ? "Copied" : "Copy"
        )
      );
    }
  }]);

  return CopyButton;
}(React.Component);

var StyledCopyToClipboard = (0, _styledComponents2.default)(_CopyToClipboard2.default).withConfig({
  displayName: "CopyButton__StyledCopyToClipboard",
  componentId: "shorbt-0"
})(["position:absolute;top:0;right:0;opacity:0;transition:opacity 50ms ease-in-out;z-index:", ";font-size:12px;font-weight:500;color:", ";background:", ";border-radius:0 4px 0 0;padding:2px 6px;cursor:pointer;"], function (props) {
  return props.theme.zIndex + 99;
}, function (props) {
  return props.theme.text;
}, function (props) {
  return props.theme.codeBorder;
});

exports.default = CopyButton;