'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inherits2 = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _getPrototypeOf = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _react = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _css = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _reactPhotoGallery = require('react-photo-gallery');

var _reactPhotoGallery2 = _interopRequireDefault(_reactPhotoGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'avenir' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'vh-100 w-100 flex items-center justify-center' },
          _react2.default.createElement(
            'div',
            { className: vh60 + " bg-white h-100" },
            _react2.default.createElement(
              'div',
              { className: 'fl w-50-ns w-100 pa5 b--black h-100-ns flex-ns items-center-ns justify-end-ns' },
              _react2.default.createElement(
                'div',
                { className: "tc " + mw24r },
                _react2.default.createElement(
                  'h3',
                  null,
                  'YogiDoList'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'YogiDoList is a social platform to track your yoga practice. You will start your journey by learning the basic poses that will help strengthen and prepare the body for a deeper practice. Persistance and perseverance are key aspects of yoga, so you must practice to maintain your rank. Each week you will be given more difficult poses than the last. The entire journey from beginner to expert spans over 300 weeks.'
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'link black-40 tracked underline-hover hover-black f6 mt3 f6-ns dib', href: 'http://www.YogiDoList.com' },
                  'www.YogiDoList.com'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fl w-50-ns w-100 pa4 bl-ns bw1 b--black h-100-ns h-50 flex-ns items-center-ns' },
              _react2.default.createElement(
                'div',
                { className: mw24r + " ml4-ns" },
                _react2.default.createElement(_reactPhotoGallery2.default, { photos: PHOTO_SET })
              )
            )
          )
        )
      );
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var PHOTO_SET = [{
  src: '/static/YDL.png',
  width: 681,
  height: 1024,
  aspectRatio: 1.5,
  lightboxImage: {
    src: '/static/YDL.png'
  }
}, {
  src: '/static/YDL.png',
  width: 600,
  height: 600,
  aspectRatio: 1,
  lightboxImage: {
    src: '/static/YDL.png'
  }
}];

var vh60 = (0, _css2.default)({
  height: '60vh'
});

var mw24r = (0, _css2.default)({
  maxWidth: '24rem'
});
    if (module.hot) {
      module.hot.accept()

      var Component = module.exports.default || module.exports
      Component.__route = "/state"

      if (module.hot.status() !== 'idle') {
        var components = next.router.components
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue

          if (components[r].Component.__route === "/state") {
            next.router.update(r, Component)
          }
        }
      }
    }
  