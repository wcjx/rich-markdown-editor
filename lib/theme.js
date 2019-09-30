"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var colors = {
  almostBlack: "#21252b",
  lightBlack: "#282c34",
  almostWhite: "#E6E6E6",
  white: "#FFF",
  white10: "rgba(255, 255, 255, 0.1)",
  black: "#000",
  black10: "rgba(0, 0, 0, 0.1)",
  primary: "#1AB6FF",
  greyLight: "#F5F5F5",
  grey: "#E8EBED",
  greyMid: "#9BA6B2",
  greyDark: "#DAE1E9"
};

var base = exports.base = _extends({}, colors, {
  fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
  fontFamilyMono: "'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",
  fontWeight: 400,
  zIndex: 100,
  link: colors.primary,
  placeholder: "#B1BECC",
  textSecondary: "#4E5C6E",
  textLight: colors.white,
  selected: colors.primary,
  codeComment: "#6a737d",
  codePunctuation: "#5e6687",
  codeNumber: "#d73a49",
  codeProperty: "#c08b30",
  codeTag: "#3d8fd1",
  codeString: "#032f62",
  codeSelector: "#6679cc",
  codeAttr: "#c76b29",
  codeEntity: "#22a2c9",
  codeKeyword: "#d73a49",
  codeFunction: "#6f42c1",
  codeStatement: "#22a2c9",
  codePlaceholder: "#3d8fd1",
  codeInserted: "#202746",
  codeImportant: "#c94922"
});

var light = exports.light = _extends({}, base, {
  background: colors.white,
  text: colors.almostBlack,
  code: colors.lightBlack,

  toolbarBackground: colors.white,
  toolbarInput: colors.white10,
  toolbarItem: colors.lightBlack,

  blockToolbarBackground: colors.greyLight,
  blockToolbarTrigger: colors.greyMid,
  blockToolbarTriggerIcon: colors.white,
  blockToolbarItem: colors.almostBlack,

  tableDivider: colors.grey,
  tableSelected: colors.primary,
  tableSelectedBackground: "#E5F7FF",

  quote: colors.greyDark,
  codeBackground: colors.greyLight,
  codeBorder: colors.grey,
  horizontalRule: colors.grey,
  imageErrorBackground: colors.greyLight
});

var dark = exports.dark = _extends({}, base, {
  background: colors.lightBlack,
  text: colors.almostWhite,
  code: colors.almostWhite,

  toolbarBackground: colors.almostBlack,
  toolbarInput: colors.black10,
  toolbarItem: colors.greyLight,

  blockToolbarBackground: colors.almostBlack,
  blockToolbarTrigger: colors.almostWhite,
  blockToolbarTriggerIcon: colors.almostBlack,
  blockToolbarItem: colors.greyLight,

  tableDivider: colors.almostBlack,
  tableSelected: colors.primary,
  tableSelectedBackground: "#002333",

  quote: colors.almostWhite,
  codeBackground: colors.almostBlack,
  codeBorder: colors.lightBlack,
  codeString: "#3d8fd1",
  horizontalRule: colors.lightBlack,
  imageErrorBackground: "rgba(0, 0, 0, 0.5)"
});

exports.default = light;