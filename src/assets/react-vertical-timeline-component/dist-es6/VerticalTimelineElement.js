"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntersectionObserver = require("react-intersection-observer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const VerticalTimelineElement = ({
  children,
  className,
  contentArrowStyle,
  contentStyle,
  date,
  dateClassName,
  icon,
  iconClassName,
  iconOnClick,
  onTimelineElementClick,
  iconStyle,
  id,
  position,
  style,
  textClassName,
  intersectionObserverProps
}) => {
  const [visible, setVisible] = (0, _react.useState)(false);
  const [ref, inView] = (0, _reactIntersectionObserver.useInView)(intersectionObserverProps);

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