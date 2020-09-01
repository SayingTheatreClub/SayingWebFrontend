"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntersectionObserver = require("react-intersection-observer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VerticalTimelineElement = function VerticalTimelineElement(_ref) {
  var children = _ref.children,
      className = _ref.className,
      contentArrowStyle = _ref.contentArrowStyle,
      contentStyle = _ref.contentStyle,
      date = _ref.date,
      dateClassName = _ref.dateClassName,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      iconOnClick = _ref.iconOnClick,
      onTimelineElementClick = _ref.onTimelineElementClick,
      iconStyle = _ref.iconStyle,
      id = _ref.id,
      position = _ref.position,
      style = _ref.style,
      textClassName = _ref.textClassName,
      intersectionObserverProps = _ref.intersectionObserverProps;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useInView = (0, _reactIntersectionObserver.useInView)(intersectionObserverProps),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  if (!visible && inView) {
    setVisible(true);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    id: id,
    className: (0, _classnames.default)(className, 'vertical-timeline-element', {
      'vertical-timeline-element--left': position === 'left',
      'vertical-timeline-element--right': position === 'right',
      'vertical-timeline-element--no-children': children === ''
    }),
    style: style
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    // eslint-disable-line jsx-a11y/no-static-element-interactions
    style: iconStyle,
    onClick: iconOnClick,
    className: (0, _classnames.default)(iconClassName, 'vertical-timeline-element-icon', {
      'bounce-in': visible,
      'is-hidden': !visible
    })
  }, icon), /*#__PURE__*/_react.default.createElement("div", {
    style: contentStyle,
    onClick: onTimelineElementClick,
    className: (0, _classnames.default)(textClassName, 'vertical-timeline-element-content', {
      'bounce-in': visible,
      'is-hidden': !visible
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: contentArrowStyle,
    className: "vertical-timeline-element-content-arrow"
  }), children, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(dateClassName, 'vertical-timeline-element-date')
  }, date))));
};

VerticalTimelineElement.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  className: _propTypes.default.string,
  contentArrowStyle: _propTypes.default.shape({}),
  contentStyle: _propTypes.default.shape({}),
  date: _propTypes.default.node,
  dateClassName: _propTypes.default.string,
  icon: _propTypes.default.element,
  iconClassName: _propTypes.default.string,
  iconStyle: _propTypes.default.shape({}),
  iconOnClick: _propTypes.default.func,
  onTimelineElementClick: _propTypes.default.func,
  id: _propTypes.default.string,
  position: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  textClassName: _propTypes.default.string,
  intersectionObserverProps: _propTypes.default.shape({
    root: _propTypes.default.object,
    rootMargin: _propTypes.default.string,
    threshold: _propTypes.default.number,
    triggerOnce: _propTypes.default.bool
  })
};
VerticalTimelineElement.defaultProps = {
  children: '',
  className: '',
  contentArrowStyle: null,
  contentStyle: null,
  icon: null,
  iconClassName: '',
  iconOnClick: null,
  onTimelineElementClick: null,
  iconStyle: null,
  id: '',
  style: null,
  date: '',
  dateClassName: '',
  position: '',
  textClassName: '',
  intersectionObserverProps: {
    rootMargin: '0px 0px -40px 0px'
  }
};
var _default = VerticalTimelineElement;
exports.default = _default;