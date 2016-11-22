"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function killProcess(pid) {
  var exec = require("child_process").exec;
  var child = exec("killall -9" + pid, function (error, stdout, stderr) {
    if (error) {
      console.error("exec error: " + error);
      return;
    }
  });
}

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

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
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return sleep(this.state.time * 1000 * 60);

              case 2:
                killProcess(this.state.process);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onStart() {
        return _ref.apply(this, arguments);
      }

      return onStart;
    }()
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
            "Minutes"
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
            "Process"
          ),
          _react2.default.createElement("input", {
            className: "form-control",
            type: "text",
            placeholder: "Insert the process name of the app.",
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
//# sourceMappingURL=index.js.map
