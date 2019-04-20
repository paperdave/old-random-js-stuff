"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = patch;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Ripple = _interopRequireDefault(require("@material-ui/core/ButtonBase/Ripple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function patch() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$DURATION = _ref.DURATION,
    DURATION = _ref$DURATION === void 0 ? 200 : _ref$DURATION,
    _ref$DELAY_RIPPLE = _ref.DELAY_RIPPLE,
    DELAY_RIPPLE = _ref$DELAY_RIPPLE === void 0 ? 50 : _ref$DELAY_RIPPLE;

  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        display: 'block',
        position: 'absolute',
        overflow: 'hidden',
        borderRadius: 'inherit',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 0
      },

      /* Styles applied to the internal `Ripple` components `ripple` class. */
      ripple: {
        width: 50,
        height: 50,
        left: 0,
        top: 0,
        opacity: 0,
        position: 'absolute'
      },

      /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
      rippleVisible: {
        opacity: 0.3,
        transform: 'scale(1)',
        animation: "mui-ripple-enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut),
        // Backward compatible logic between JSS v9 and v10.
        // To remove with the release of Material-UI v4
        animationName: '$mui-ripple-enter'
      },

      /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
      ripplePulsate: {
        animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
      },

      /* Styles applied to the internal `Ripple` components `child` class. */
      child: {
        opacity: 1,
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'currentColor'
      },

      /* Styles applied to the internal `Ripple` components `childLeaving` class. */
      childLeaving: {
        opacity: 0,
        animation: "mui-ripple-exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut),
        // Backward compatible logic between JSS v9 and v10.
        // To remove with the release of Material-UI v4
        animationName: '$mui-ripple-exit'
      },

      /* Styles applied to the internal `Ripple` components `childPulsate` class. */
      childPulsate: {
        position: 'absolute',
        left: 0,
        top: 0,
        animation: "mui-ripple-pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite"),
        // Backward compatible logic between JSS v9 and v10.
        // To remove with the release of Material-UI v4
        animationName: '$mui-ripple-pulsate'
      },
      '@keyframes mui-ripple-enter': {
        '0%': {
          transform: 'scale(0.2)',
          opacity: 0.1
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3
        }
      },
      '@keyframes mui-ripple-exit': {
        '0%': {
          opacity: 1
        },
        '100%': {
          opacity: 0
        }
      },
      '@keyframes mui-ripple-pulsate': {
        '0%': {
          transform: 'scale(1)'
        },
        '50%': {
          transform: 'scale(0.92)'
        },
        '100%': {
          transform: 'scale(1)'
        }
      }
    };
  };

  var TouchRipple =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(TouchRipple, _React$PureComponent);

      function TouchRipple() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, TouchRipple);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TouchRipple)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {
          nextKey: 0,
          ripples: []
        });

        _defineProperty(_assertThisInitialized(_this), "pulsate", function () {
          _this.start({}, {
            pulsate: true
          });
        });

        _defineProperty(_assertThisInitialized(_this), "start", function () {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var cb = arguments.length > 2 ? arguments[2] : undefined;
          var _options$pulsate = options.pulsate,
            pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
            _options$center = options.center,
            center = _options$center === void 0 ? _this.props.center || options.pulsate : _options$center,
            _options$fakeElement = options.fakeElement,
            fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

          if (event.type === 'mousedown' && _this.ignoringMouseDown) {
            _this.ignoringMouseDown = false;
            return;
          }

          if (event.type === 'touchstart') {
            _this.ignoringMouseDown = true;
          }

          var element = fakeElement ? null : _reactDom.default.findDOMNode(_assertThisInitialized(_this));
          var rect = element ? element.getBoundingClientRect() : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
          }; // Get the size of the ripple

          var rippleX;
          var rippleY;
          var rippleSize;

          if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
            rippleX = Math.round(rect.width / 2);
            rippleY = Math.round(rect.height / 2);
          } else {
            var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
            var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
            rippleX = Math.round(clientX - rect.left);
            rippleY = Math.round(clientY - rect.top);
          }

          if (center) {
            rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

            if (rippleSize % 2 === 0) {
              rippleSize += 1;
            }
          } else {
            var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
            var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
            rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
          } // Touche devices


          if (event.touches) {
            // Prepare the ripple effect.
            _this.startTimerCommit = function () {
              _this.startCommit({
                pulsate: pulsate,
                rippleX: rippleX,
                rippleY: rippleY,
                rippleSize: rippleSize,
                cb: cb
              });
            }; // Delay the execution of the ripple effect.


            _this.startTimer = setTimeout(function () {
              if (_this.startTimerCommit) {
                _this.startTimerCommit();

                _this.startTimerCommit = null;
              }
            }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
          } else {
            _this.startCommit({
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize,
              cb: cb
            });
          }
        });

        _defineProperty(_assertThisInitialized(_this), "startCommit", function (params) {
          var pulsate = params.pulsate,
            rippleX = params.rippleX,
            rippleY = params.rippleY,
            rippleSize = params.rippleSize,
            cb = params.cb;

          _this.setState(function (state) {
            return {
              nextKey: state.nextKey + 1,
              ripples: [].concat(_toConsumableArray(state.ripples), [_react.default.createElement(_Ripple.default, {
                key: state.nextKey,
                classes: _this.props.classes,
                timeout: {
                  exit: DURATION,
                  enter: DURATION
                },
                pulsate: pulsate,
                rippleX: rippleX,
                rippleY: rippleY,
                rippleSize: rippleSize
              })])
            };
          }, cb);
        });

        _defineProperty(_assertThisInitialized(_this), "stop", function (event, cb) {
          clearTimeout(_this.startTimer);
          var ripples = _this.state.ripples; // The touch interaction occurs too quickly.
          // We still want to show ripple effect.

          if (event.type === 'touchend' && _this.startTimerCommit) {
            event.persist();

            _this.startTimerCommit();

            _this.startTimerCommit = null;
            _this.startTimer = setTimeout(function () {
              _this.stop(event, cb);
            });
            return;
          }

          _this.startTimerCommit = null;

          if (ripples && ripples.length) {
            _this.setState({
              ripples: ripples.slice(1)
            }, cb);
          }
        });

        return _this;
      }

      _createClass(TouchRipple, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearTimeout(this.startTimer);
        }
      }, {
        key: "render",
        value: function render() {
          // eslint-disable-next-line no-unused-vars
          var _this$props = this.props,
            center = _this$props.center,
            classes = _this$props.classes,
            className = _this$props.className,
            other = _objectWithoutProperties(_this$props, ["center", "classes", "className"]);

          return _react.default.createElement(_TransitionGroup.default, _extends({
            component: "span",
            enter: true,
            exit: true,
            className: (0, _classnames.default)(classes.root, className)
          }, other), this.state.ripples);
        }
      }]);

      return TouchRipple;
    }(_react.default.PureComponent);

  TouchRipple.propTypes = {
    center: _propTypes.default.bool,
    classes: _propTypes.default.object.isRequired,
    className: _propTypes.default.string
  };
  TouchRipple.defaultProps = {
    center: false
  };

  var TouchRippleModule = require('@material-ui/core/ButtonBase/TouchRipple');

  TouchRippleModule.default = (0, _withStyles.default)(styles, {
    flip: false,
    name: 'MuiTouchRipple'
  })(TouchRipple);
}
