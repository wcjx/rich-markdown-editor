"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GripColumn = exports.GripRow = exports.GripTable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Toolbar = require("./Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Grip = require("./Grip");

var _Grip2 = _interopRequireDefault(_Grip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          editor = _props.editor,
          readOnly = _props.readOnly,
          attributes = _props.attributes,
          node = _props.node;
      var document = editor.value.document;


      var position = editor.getPositionByKey(document, node.key);
      var isFirstRow = position.isFirstRow();
      var isFirstColumn = position.isFirstColumn();
      var isLastRow = position.isLastRow();
      var isLastColumn = position.isLastColumn();
      var isSelected = node.data.get("selected");
      var isTableSelected = position.table.data.get("selectedTable");
      var isActive = editor.isSelectionInTable() && !isTableSelected;
      var selectedRows = position.table.data.get("selectedRows");
      var selectedColumns = position.table.data.get("selectedColumns");
      var isRowSelected = selectedRows && selectedRows.includes(position.getRowIndex());
      var isColumnSelected = selectedColumns && selectedColumns.includes(position.getColumnIndex());

      return React.createElement(
        StyledTd,
        _extends({
          ref: function ref(_ref) {
            return _this2.cell = _ref;
          },
          isFirstRow: isFirstRow,
          isFirstColumn: isFirstColumn,
          isSelected: isSelected,
          onClick: function onClick() {
            return editor.clearSelected(position.table);
          }
        }, attributes),
        !readOnly && React.createElement(
          React.Fragment,
          null,
          isFirstColumn && isFirstRow && React.createElement(
            React.Fragment,
            null,
            React.createElement(GripTable, {
              contentEditable: false,
              isSelected: isTableSelected,
              onClick: function onClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();

                if (isTableSelected) {
                  editor.clearSelected(position.table);
                } else {
                  editor.selectAll().blur();
                }
              }
            }),
            React.createElement(_Toolbar2.default, {
              editor: editor,
              cell: this.cell,
              active: isTableSelected,
              type: "table"
            })
          ),
          isFirstColumn && React.createElement(
            React.Fragment,
            null,
            React.createElement(GripRow, {
              isFirstRow: isFirstRow,
              isLastRow: isLastRow,
              isSelected: isRowSelected,
              contentEditable: false,
              onClick: function onClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();
                editor.selectRow(!isSelected || isTableSelected).blur();
              }
            }),
            isActive && React.createElement(_Toolbar2.default, {
              editor: editor,
              cell: this.cell,
              active: isRowSelected,
              type: "row"
            })
          ),
          isFirstRow && React.createElement(
            React.Fragment,
            null,
            React.createElement(GripColumn, {
              isFirstColumn: isFirstColumn,
              isLastColumn: isLastColumn,
              isSelected: isColumnSelected,
              contentEditable: false,
              onClick: function onClick(ev) {
                ev.preventDefault();
                ev.stopPropagation();
                editor.selectColumn(!isSelected || isTableSelected).blur();
              }
            }),
            isActive && React.createElement(_Toolbar2.default, {
              editor: editor,
              cell: this.cell,
              active: isColumnSelected,
              type: "column"
            })
          )
        ),
        React.createElement(
          RowContent,
          { align: node.data.get("align") },
          children
        )
      );
    }
  }]);

  return Cell;
}(React.Component);

var GripTable = exports.GripTable = (0, _styledComponents2.default)(_Grip2.default).withConfig({
  displayName: "Cell__GripTable",
  componentId: "sc-17ig7lf-0"
})(["width:13px;height:13px;border-radius:13px;border:2px solid ", ";position:absolute;top:-18px;left:-18px;"], function (props) {
  return props.theme.background;
});

var GripRow = exports.GripRow = (0, _styledComponents2.default)(_Grip2.default).withConfig({
  displayName: "Cell__GripRow",
  componentId: "sc-17ig7lf-1"
})(["left:-16px;top:0px;height:100%;width:12px;border-right:3px solid ", ";", " ", ""], function (props) {
  return props.theme.background;
}, function (props) {
  return props.isFirstRow && "\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n  ";
}, function (props) {
  return props.isLastRow && "\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n  ";
});

var GripColumn = exports.GripColumn = (0, _styledComponents2.default)(_Grip2.default).withConfig({
  displayName: "Cell__GripColumn",
  componentId: "sc-17ig7lf-2"
})(["top:-16px;left:0px;width:100%;height:12px;border-bottom:3px solid ", ";", " ", ""], function (props) {
  return props.theme.background;
}, function (props) {
  return props.isFirstColumn && "\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n";
}, function (props) {
  return props.isLastColumn && "\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n";
});

var RowContent = _styledComponents2.default.div.withConfig({
  displayName: "Cell__RowContent",
  componentId: "sc-17ig7lf-3"
})(["padding:4px 12px;text-align:", ";"], function (props) {
  return props.align;
});

var StyledTd = _styledComponents2.default.td.withConfig({
  displayName: "Cell__StyledTd",
  componentId: "sc-17ig7lf-4"
})(["vertical-align:top;border-right:1px solid ", ";position:relative;background:", ";", ""], function (props) {
  return props.theme.tableDivider;
}, function (props) {
  return props.isSelected ? props.theme.tableSelectedBackground : props.theme.background;
}, function (props) {
  return props.isFirstRow && "\n  min-width: 100px;\n  ";
});

exports.default = Cell;