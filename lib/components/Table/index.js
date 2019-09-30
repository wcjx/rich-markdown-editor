"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactDom = require("react-dom");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Cell = require("./Cell");

var _Scrollable = require("./Scrollable");

var _Scrollable2 = _interopRequireDefault(_Scrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Looking for logic for the table controls and toolbars?
// It mostly lives in the "Cell" component and the Table plugin

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.handleOutsideMouseClick = function (ev) {
      var element = (0, _reactDom.findDOMNode)(_this.table);

      if (!element || ev.target instanceof Node && element.contains(ev.target)) {
        return;
      }

      _this.props.editor.clearSelected(_this.props.node);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== "undefined") {
        window.addEventListener("click", this.handleOutsideMouseClick);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window !== "undefined") {
        window.removeEventListener("click", this.handleOutsideMouseClick);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          attributes = _props.attributes;


      return React.createElement(
        _Scrollable2.default,
        null,
        React.createElement(
          StyledTable,
          _extends({ ref: function ref(_ref2) {
              return _this2.table = _ref2;
            } }, attributes),
          React.createElement(
            "tbody",
            null,
            children
          )
        )
      );
    }
  }]);

  return Table;
}(React.Component);

var StyledTable = _styledComponents2.default.table.withConfig({
  displayName: "Table__StyledTable",
  componentId: "gtczaf-0"
})(["width:100%;border-collapse:collapse;border-radius:4px;border:1px solid ", ";margin-top:1em;*{box-sizing:initial;}", ",", ",", "{opacity:0;transition:opacity 100ms ease-in-out;}&:hover{", ",", ",", "{opacity:1;}}"], function (props) {
  return props.theme.tableDivider;
}, _Cell.GripColumn, _Cell.GripRow, _Cell.GripTable, _Cell.GripColumn, _Cell.GripRow, _Cell.GripTable);

exports.default = Table;