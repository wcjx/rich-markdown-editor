"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = exports.theme = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _slate = require("slate");

var _slateReact = require("slate-react");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("./theme");

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

var _getDataTransferFiles = require("./lib/getDataTransferFiles");

var _getDataTransferFiles2 = _interopRequireDefault(_getDataTransferFiles);

var _isModKey = require("./lib/isModKey");

var _isModKey2 = _interopRequireDefault(_isModKey);

var _Flex = require("./components/Flex");

var _Flex2 = _interopRequireDefault(_Flex);

var _plugins = require("./plugins");

var _plugins2 = _interopRequireDefault(_plugins);

var _commands = require("./commands");

var _commands2 = _interopRequireDefault(_commands);

var _queries = require("./queries");

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var theme = exports.theme = _theme.light;
var schema = exports.schema = _schema2.default;

var defaultOptions = {};

var voidValue = {
  document: {
    nodes: [{
      object: "block",
      type: "paragraph",
      nodes: [{
        object: "text",
        text: ""
      }]
    }]
  }
};
var RichMarkdownEditor = (_temp = _class = function (_React$PureComponent) {
  _inherits(RichMarkdownEditor, _React$PureComponent);

  function RichMarkdownEditor(props) {
    var _this2 = this;

    _classCallCheck(this, RichMarkdownEditor);

    var _this = _possibleConstructorReturn(this, (RichMarkdownEditor.__proto__ || Object.getPrototypeOf(RichMarkdownEditor)).call(this, props));

    _this.prevSchema = null;
    _this.schema = null;

    _this.setEditorRef = function (ref) {
      _this.editor = ref;
      _this.props.editorRef(ref);
    };

    _this.value = function () {
      return _this.state.editorValue;
    };

    _this.handleChange = function (_ref) {
      var value = _ref.value;

      _this.setState({ editorValue: value }, function (state) {
        if (_this.props.onChange && !_this.props.readOnly) {
          _this.props.onChange(_this.value);
        }
      });
    };

    _this.handleDrop = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ev) {
        var files, i, _file;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.props.readOnly) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (_this.editor.props.uploadImage) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                if (!ev.isDefaultPrevented()) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:

                // otherwise we'll handle this
                ev.preventDefault();
                ev.stopPropagation();

                files = (0, _getDataTransferFiles2.default)(ev);
                i = 0;

              case 10:
                if (!(i < files.length)) {
                  _context.next = 18;
                  break;
                }

                _file = files[i];

                if (!_file.type.startsWith("image/")) {
                  _context.next = 15;
                  break;
                }

                _context.next = 15;
                return _this.insertImageFile(_file);

              case 15:
                i++;
                _context.next = 10;
                break;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.insertImageFile = function (file) {
      _this.editor.insertImageFile(file);
    };

    _this.cancelEvent = function (ev) {
      ev.preventDefault();
    };

    _this.handleKeyDown = function (ev, editor) {
      var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      if (_this.props.readOnly) return next();

      switch (ev.key) {
        case "s":
          if ((0, _isModKey2.default)(ev)) return _this.onSave(ev);
          break;
        case "Enter":
          if ((0, _isModKey2.default)(ev)) return _this.onSaveAndExit(ev);
          break;
        case "Escape":
          if ((0, _isModKey2.default)(ev)) return _this.onCancel(ev);
          break;
        default:
      }

      return next();
    };

    _this.focusAtStart = function () {
      var editor = _this.editor;

      editor.moveToStartOfDocument().focus();
    };

    _this.focusAtEnd = function () {
      var editor = _this.editor;

      editor.moveToEndOfDocument().focus();
    };

    _this.getSchema = function () {
      if (_this.prevSchema !== _this.props.schema) {
        _this.schema = _extends({}, _schema2.default, _this.props.schema || {});
        _this.prevSchema = _this.props.schema;
      }
      return _this.schema;
    };

    _this.render = function () {
      var _this$props = _this.props,
          readOnly = _this$props.readOnly,
          pretitle = _this$props.pretitle,
          placeholder = _this$props.placeholder,
          onSave = _this$props.onSave,
          onChange = _this$props.onChange,
          onCancel = _this$props.onCancel,
          uploadImage = _this$props.uploadImage,
          onSearchLink = _this$props.onSearchLink,
          onClickLink = _this$props.onClickLink,
          onImageUploadStart = _this$props.onImageUploadStart,
          onImageUploadStop = _this$props.onImageUploadStop,
          onShowToast = _this$props.onShowToast,
          className = _this$props.className,
          style = _this$props.style,
          dark = _this$props.dark,
          defaultValue = _this$props.defaultValue,
          autoFocus = _this$props.autoFocus,
          plugins = _this$props.plugins,
          editorRef = _this$props.editorRef,
          spellCheck = _this$props.spellCheck,
          rest = _objectWithoutProperties(_this$props, ["readOnly", "pretitle", "placeholder", "onSave", "onChange", "onCancel", "uploadImage", "onSearchLink", "onClickLink", "onImageUploadStart", "onImageUploadStop", "onShowToast", "className", "style", "dark", "defaultValue", "autoFocus", "plugins", "editorRef", "spellCheck"]);

      var theme = _this.props.theme || (dark ? _theme.dark : _theme.light);

      return React.createElement(
        _Flex2.default,
        {
          style: style,
          className: className,
          onDrop: _this.handleDrop,
          onDragOver: _this.cancelEvent,
          onDragEnter: _this.cancelEvent,
          align: "flex-start",
          justify: "center",
          padding: theme.padding,
          column: true,
          auto: true
        },
        React.createElement(
          _styledComponents.ThemeProvider,
          { theme: theme },
          React.createElement(StyledEditor, _extends({
            ref: _this.setEditorRef,
            plugins: _this.plugins,
            value: _this.state.editorValue,
            commands: _commands2.default,
            queries: _queries2.default,
            placeholder: placeholder,
            schema: _this.getSchema(),
            onKeyDown: _this.handleKeyDown,
            onChange: _this.handleChange,
            onSave: onSave,
            onSearchLink: onSearchLink,
            onClickLink: onClickLink,
            onImageUploadStart: onImageUploadStart,
            onImageUploadStop: onImageUploadStop,
            onShowToast: onShowToast,
            readOnly: readOnly,
            spellCheck: spellCheck || readOnly,
            uploadImage: uploadImage,
            pretitle: pretitle,
            options: defaultOptions
          }, rest))
        )
      );
    };

    var builtInPlugins = (0, _plugins2.default)({
      placeholder: props.placeholder,
      getLinkComponent: props.getLinkComponent
    });

    // in Slate plugins earlier in the stack can opt not to continue
    // to later ones. By adding overrides first we give more control
    _this.plugins = [].concat(_toConsumableArray(props.plugins), _toConsumableArray(builtInPlugins));

    _this.state = {
      editorValue: props.defaultValue
    };
    return _this;
  }

  _createClass(RichMarkdownEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToAnchor();

      if (this.props.readOnly) return;
      if (typeof window !== "undefined") {
        window.addEventListener("keydown", this.handleKeyDown);
      }

      if (this.props.autoFocus) {
        this.focusAtEnd();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.readOnly && !this.props.readOnly && this.props.autoFocus) {
        this.focusAtEnd();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", this.handleKeyDown);
      }
    }
  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor() {
      var hash = window.location.hash;

      if (!hash) return;

      try {
        var element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } catch (err) {
        // querySelector will throw an error if the hash begins with a number
        // or contains a period. This is protected against now by safeSlugify
        // however previous links may be in the wild.
        console.warn("Attempted to scroll to invalid hash", err);
      }
    }
  }, {
    key: "onSave",
    value: function onSave(ev) {
      var onSave = this.props.onSave;

      if (onSave) {
        ev.preventDefault();
        ev.stopPropagation();
        onSave({ done: false });
      }
    }
  }, {
    key: "onSaveAndExit",
    value: function onSaveAndExit(ev) {
      var onSave = this.props.onSave;

      if (onSave) {
        ev.preventDefault();
        ev.stopPropagation();
        onSave({ done: true });
      }
    }
  }, {
    key: "onCancel",
    value: function onCancel(ev) {
      var onCancel = this.props.onCancel;

      if (onCancel) {
        ev.preventDefault();
        ev.stopPropagation();
        onCancel();
      }
    }
  }]);

  return RichMarkdownEditor;
}(React.PureComponent), _class.defaultProps = {
  defaultValue: _slate.Value.fromJS(voidValue),
  placeholder: "Write something nice…",
  onImageUploadStart: function onImageUploadStart() {},
  onImageUploadStop: function onImageUploadStop() {},
  plugins: [],
  tooltip: "span",
  editorRef: function editorRef() {},
  spellCheck: true
}, _temp);


var StyledEditor = (0, _styledComponents2.default)(_slateReact.Editor).withConfig({
  displayName: "src__StyledEditor",
  componentId: "dlrrv6-0"
})(["color:", ";background:", ";font-family:", ";font-weight:", ";font-size:1em;line-height:1.7em;width:100%;h1,h2,h3,h4,h5,h6{font-weight:500;}ul,ol{margin:0 0.1em;padding-left:1em;ul,ol{margin:0.1em;}}p{position:relative;margin:0;}a{color:", ";}a:hover{text-decoration:", ";}li p{display:inline;margin:0;}.todoList{list-style:none;padding-left:0;.todoList{padding-left:1em;}}.todo{span:last-child:focus{outline:none;}}blockquote{border-left:3px solid ", ";margin:0;padding-left:10px;font-style:italic;}b,strong{font-weight:600;}"], function (props) {
  return props.theme.text;
}, function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.link;
}, function (props) {
  return props.readOnly ? "underline" : "none";
}, function (props) {
  return props.theme.quote;
});

exports.default = RichMarkdownEditor;