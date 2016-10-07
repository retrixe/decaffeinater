"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inputs = function (_React$Component) {
  _inherits(Inputs, _React$Component);

  function Inputs() {
    _classCallCheck(this, Inputs);

    return _possibleConstructorReturn(this, (Inputs.__proto__ || Object.getPrototypeOf(Inputs)).apply(this, arguments));
  }

  _createClass(Inputs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return <div>
        <input placeholder="Type the command to execute the program." className="col-sm-4" onInput={function (e) {
          return _this2.props.changeConfig(e.target.value, 'pid');
        }} />
        <input placeholder="Enter the minutes to play." className="col-sm-4" onInput={function (e) {
          return _this2.props.changeConfig(e.target.value, 'hours');
        }} />
      </div>;
    }
  }]);

  return Inputs;
}(_react2.default.Component);

exports.default = Inputs;
;