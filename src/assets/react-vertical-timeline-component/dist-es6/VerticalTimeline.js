"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VerticalTimeline = ({
  animate,
  className,
  layout,
  children
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: (0, _classnames.default)(className, 'vertical-timeline', {
    'vertical-timeline--animate': animate,
    'vertical-timeline--two-columns': layout === '2-columns',
    'vertical-timeline--one-column': layout === '1-column'
  })
}, children);

VerticalTimeline.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,
  className: _propTypes.default.string,
  animate: _propTypes.default.bool,
  layout: _propTypes.default.oneOf(['1-column', '2-columns'])
};
VerticalTimeline.defaultProps = {
  animate: true,
  className: '',
  layout: '2-columns'
};
var _default = VerticalTimeline;
exports.default = _default;