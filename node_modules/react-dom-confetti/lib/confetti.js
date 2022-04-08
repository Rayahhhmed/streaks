"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _domConfetti = require("dom-confetti");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  position: "relative"
};

var Confetti = function (_Component) {
  _inherits(Confetti, _Component);

  function Confetti(props) {
    _classCallCheck(this, Confetti);

    var _this = _possibleConstructorReturn(this, (Confetti.__proto__ || Object.getPrototypeOf(Confetti)).call(this, props));

    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(Confetti, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.active && this.props.active) {
        (0, _domConfetti.confetti)(this.container, this.props.config);
      }
    }
  }, {
    key: "setRef",
    value: function setRef(ref) {
      this.container = ref;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: this.props.className, style: style, ref: this.setRef });
    }
  }]);

  return Confetti;
}(_react.Component);

exports.default = Confetti;