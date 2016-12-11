"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("babel-polyfill");

var _electron = require("electron");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // polyfill to use async/await.
// ipc communication to main process.

// Following imports for semantic ui, awsm CSS framework :D


// Sends ipc message to main process to kill app when called.
function killProcess(pid) {
  _electron.ipcRenderer.send("iCanKill?", pid);
}

// sleep function to wait for some time.
function sleep(s) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, s * 1000);
  });
}

// Our main React component (and only one)

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    // Set up initial configuration for state.
    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      time: 0,
      process: "",
      countdown: 0
    };

    // Bind functions here.
    _this.onStart = _this.onStart.bind(_this);
    return _this;
  }

  // click handler to start the countdown till process terminates.


  _createClass(Index, [{
    key: "onStart",
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var i, time, process;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // initial variables here.
                i = 0;
                // following 2 lines prevents user from tampering state during countdown. 

                time = this.state.time * 60;
                process = JSON.parse(JSON.stringify(this.state)).process;
                // wait 1 second, then add 1 to this.state.countdown for (time) times.

                i = 0;

              case 4:
                if (!(i < this.state.time * 60)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return sleep(1);

              case 7:
                this.setState({ countdown: this.state.countdown + 1 });

              case 8:
                i++;
                _context.next = 4;
                break;

              case 11:
                killProcess(process); // send ipc message to main proc to kill process.
                this.setState({ countdown: 0 }); // reset countdown :D

              case 13:
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

    // This function is big, but it's 90% styling, nothing of interest here.

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_semanticUiReact.Input, {
          label: "Time (in minutes)",
          type: "number", fluid: true,
          placeholder: "Insert amount of time to play.",
          onChange: function onChange(e) {
            return _this2.setState({ time: e.target.value });
          } }),
        _react2.default.createElement(_semanticUiReact.Input, {
          label: "Process",
          type: "text", fluid: true,
          placeholder: "Insert the process name of the app.",
          onChange: function onChange(event) {
            return _this2.setState({ process: event.target.value });
          } }),
        _react2.default.createElement("br", null),
        _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onStart, content: "Click to start", inverted: true, fluid: true, color: "green" }),
        _react2.default.createElement("br", null),
        _react2.default.createElement(
          "div",
          null,
          "Time left to finish: ",
          this.state.time * 60 - this.state.countdown,
          " seconds left, out of ",
          this.state.time * 60,
          " seconds."
        ),
        _react2.default.createElement(_semanticUiReact.Progress, { value: this.state.countdown, indicating: true, total: this.state.time * 60 }),
        ">"
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

// Render final app to the screen :D


_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map
