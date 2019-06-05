"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _CheckboxIcon = _interopRequireDefault(require("./CheckboxIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var icon = _react.default.createElement(_CheckboxIcon.default, null);

var checkedIcon = _react.default.createElement(_CheckboxIcon.default, {
  checked: true
});

function Checkbox(props) {
  return _react.default.createElement(_Checkbox.default, _extends({
    icon: icon,
    checkedIcon: checkedIcon
  }, props));
}

var _default = Checkbox;
exports.default = _default;
