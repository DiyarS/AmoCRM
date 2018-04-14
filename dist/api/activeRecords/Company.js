'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EntityActiveRecord = require('../../base/activeRecords/EntityActiveRecord');

var _EntityActiveRecord2 = _interopRequireDefault(_EntityActiveRecord);

var _Removable = require('../../base/activeRecords/behaviors/Removable');

var _Removable2 = _interopRequireDefault(_Removable);

var _Notable = require('../../base/activeRecords/behaviors/Notable');

var _Notable2 = _interopRequireDefault(_Notable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Company = function (_Entity) {
  _inherits(Company, _Entity);

  function Company() {
    _classCallCheck(this, Company);

    return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).apply(this, arguments));
  }

  return Company;
}(_EntityActiveRecord2.default);

Company.behaviors = [new _Removable2.default(), new _Notable2.default()];
exports.default = Company;