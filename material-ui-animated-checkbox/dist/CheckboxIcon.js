"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This component has a lot of workarounds, since css clip-path is not supported on
// all browsers.
var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      width: '24px',
      height: '24px'
    },
    check: {
      fill: theme.palette.background.default
    },
    checkClip: {
      transition: [theme.transitions.create('width', {
        duration: 0,
        delay: 50
      }), theme.transitions.create('opacity', {
        easing: 'linear',
        duration: 50
      })],
      opacity: 0
    },
    checkClipChecked: {
      transition: theme.transitions.create('width', {
        delay: 50,
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest
      })
    },
    rectClip: {
      willChange: 'x,y,width,height',
      transition: ['x', 'y', 'width', 'height'].map(function (prop) {
        return theme.transitions.create(prop, {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.shortest
        });
      })
    },
    rectClipChecked: {
      willChange: 'x,y,width,height',
      transition: ['x', 'y', 'width', 'height'].map(function (prop) {
        return theme.transitions.create(prop, {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.shortest
        });
      })
    }
  };
};

exports.styles = styles;

var generateID = function generateID() {
  return "id".concat(Math.random()).concat(Math.random());
};
/**
 * @ignore - internal component.
 */


function CheckboxButtonIcon(props) {
  var checked = props.checked,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["checked", "classes", "className"]); // Workaround: Generating unique ids, since if they are reused it will cause problems


  var idCheckClip = _react.default.useMemo(generateID, []);

  var idBoxClip = _react.default.useMemo(generateID, []); // Workaround: Using a inlined SVG icon here, just makes it easier to deal with


  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: "0 0 24 24",
    width: "24px"
  }, other), _react.default.createElement("clipPath", {
    id: idBoxClip
  }, _react.default.createElement("rect", {
    className: (0, _clsx.default)(classes.rectClip, checked && classes.rectClipChecked),
    width: checked ? '12' : '5',
    height: "24"
  }), _react.default.createElement("rect", {
    className: (0, _clsx.default)(classes.rectClip, checked && classes.rectClipChecked),
    width: "24",
    height: checked ? '12' : '5'
  }), _react.default.createElement("rect", {
    className: (0, _clsx.default)(classes.rectClip, checked && classes.rectClipChecked),
    x: checked ? '12' : '19',
    width: checked ? '12' : '5',
    height: "24"
  }), _react.default.createElement("rect", {
    className: (0, _clsx.default)(classes.rectClip, checked && classes.rectClipChecked),
    y: checked ? '12' : '19',
    width: "24",
    height: checked ? '12' : '5'
  })), _react.default.createElement("clipPath", {
    id: idCheckClip
  }, _react.default.createElement("rect", {
    className: (0, _clsx.default)(classes.checkClip, checked && classes.checkClipChecked),
    x: "5",
    height: "24",
    width: checked ? '14' : '0'
  })), _react.default.createElement("path", {
    d: "M5 3H19C20.11 3 21 3.9 21 5V19C21 20.1 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3Z",
    clipPath: "url(#".concat(idBoxClip, ")")
  }), _react.default.createElement("path", {
    className: classes.check,
    d: "M5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z",
    clipPath: "url(#".concat(idCheckClip, ")")
  }), ",");
}

CheckboxButtonIcon.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string
};

var _default = (0, _withStyles.default)(styles, {
  name: 'UnstableCheckboxIcon'
})(CheckboxButtonIcon);

exports.default = _default;
