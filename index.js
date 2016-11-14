"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      time: "",
      process: ""
    };

    _this.onStart = _this.onStart.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: "onStart",
    value: function onStart() {
      /* eslint-disable no-console */
      console.log(this.state.time);
      console.log(this.state.process);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement(
            "span",
            {
              className: "input-group-addon",
              id: "sizing-addon1 basic-addon1" },
            "Seconds"
          ),
          _react2.default.createElement("input", {
            className: "form-control",
            type: "number",
            placeholder: "Insert amount of time to play.",
            value: this.state.time,
            onInput: function onInput(e) {
              return _this2.setState({ time: e.target.value });
            } })
        ),
        _react2.default.createElement(
          "div",
          { className: "input-group" },
          _react2.default.createElement(
            "span",
            {
              className: "input-group-addon",
              id: "sizing-addon1 basic-addon1" },
            "PID"
          ),
          _react2.default.createElement("input", {
            className: "form-control",
            type: "text",
            placeholder: "Insert the process name of the game.",
            value: this.state.process,
            onInput: function onInput(event) {
              return _this2.setState({ process: event.target.value });
            } })
        ),
        _react2.default.createElement(
          "button",
          { className: "btn btn-primary",
            onClick: this.onStart },
          "Click to start."
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("app"));