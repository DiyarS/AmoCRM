"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrivateRequest = function () {
  function PrivateRequest(options) {
    _classCallCheck(this, PrivateRequest);

    this._options = options;
  }

  _createClass(PrivateRequest, [{
    key: "send",
    value: function send() {
      var _options = this._options,
          hostname = _options.hostname,
          path = _options.path,
          _options$method = _options.method,
          method = _options$method === undefined ? "GET" : _options$method,
          _options$headers = _options.headers,
          headers = _options$headers === undefined ? {} : _options$headers,
          _options$data = _options.data,
          data = _options$data === undefined ? "" : _options$data,
          form = _options.form,
          _options$secure = _options.secure,
          secure = _options$secure === undefined ? false : _options$secure;


      return new Promise(function (resolve, reject) {
        var url = "" + hostname + path;

        (0, _axios2.default)({
          method: method,
          headers: headers,
          url: url,
          data: data
        }).then(function (response) {
          return resolve(response);
        }).catch(function (error) {
          return reject(error);
        });

        if (form) {
          form.pipe(request);
        }
      });
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      return function (_ref) {
        var error = _ref.error;
        return callback(error);
      };
    }
  }, {
    key: "onResponse",
    value: function onResponse(callback) {
      var rawData = "";
      var onResponseData = function onResponseData(chunk) {
        rawData += chunk;
        console.log(chunk);
      },
          onRequestEnd = function onRequestEnd(response) {
        return function () {
          return callback({ response: response, rawData: rawData });
        };
      };

      return function (response) {
        response.on("data", onResponseData);
        response.on("end", onRequestEnd(response));
      };
    }
  }]);

  return PrivateRequest;
}();

exports.default = HTTPRequest;