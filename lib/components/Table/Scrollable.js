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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollable = function (_React$Component) {
  _inherits(Scrollable, _React$Component);

  function Scrollable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Scrollable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scrollable.__proto__ || Object.getPrototypeOf(Scrollable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      shadowLeft: false,
      shadowRight: false
    }, _this.handleScroll = function (ev) {
      var shadowLeft = ev.currentTarget.scrollLeft > 0;

      if (_this.state.shadowLeft !== shadowLeft) {
        _this.setState({ shadowLeft: shadowLeft });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Scrollable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateRightShadow();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateRightShadow();
    }
  }, {
    key: "updateRightShadow",
    value: function updateRightShadow() {
      var shadowRight = !!(this.element && this.element.scrollWidth > this.element.clientWidth);

      if (this.state.shadowRight !== shadowRight) {
        this.setState({ shadowRight: shadowRight });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      return React.createElement(
        Wrapper,
        null,
        React.createElement(
          Scrolling,
          _extends({
            ref: function ref(_ref2) {
              return _this2.element = _ref2;
            },
            onScroll: this.handleScroll
          }, rest),
          children
        ),
        React.createElement(Shadow, { left: this.state.shadowLeft }),
        React.createElement(Shadow, { right: this.state.shadowRight })
      );
    }
  }]);

  return Scrollable;
}(React.Component);

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: "Scrollable__Wrapper",
  componentId: "sc-17fg87f-0"
})(["position:relative;margin:0.5em 0;"]);

var Scrolling = _styledComponents2.default.div.withConfig({
  displayName: "Scrollable__Scrolling",
  componentId: "sc-17fg87f-1"
})(["overflow-y:hidden;overflow-x:auto;padding-left:1em;border-left:1px solid transparent;border-right:1px solid transparent;transition:border 250ms ease-in-out;margin-left:-1em;"]);

var Shadow = _styledComponents2.default.div.withConfig({
  displayName: "Scrollable__Shadow",
  componentId: "sc-17fg87f-2"
})(["position:absolute;top:0;bottom:0;left:-1em;width:16px;transition:box-shadow 250ms ease-in-out;border:0px solid transparent;border-left-width:1em;pointer-events:none;", " ", ""], function (props) {
  return props.left && "\n     box-shadow: 16px 0 16px -16px inset rgba(0,0,0,0.25);\n     border-left: 1em solid " + props.theme.background + ";\n  ";
}, function (props) {
  return props.right && "right: 0;\n     left: auto;\n     box-shadow: -16px 0 16px -16px inset rgba(0,0,0,0.25);\n  ";
});

exports.default = Scrollable;