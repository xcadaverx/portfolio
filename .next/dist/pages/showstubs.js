'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _css = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
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
              'ShowStubs TicketMailer'
            ),
            _react2.default.createElement(
              'p',
              null,
              'ShowStubs TicketMailer is a private interface and back-end used to deliver information to all ShowStubs ticket purchasers. The application integrates a private login system to allow an administrator to input custom information pertaining to a particular Shopify item. When that Shopify item is purchased, ShowStubs TicketMailer will generate and email a PDF attachment to the user containing the custom information.'
            ),
            _react2.default.createElement(
              'a',
              { className: 'link black-40 tracked underline-hover hover-black f6 mt3 f6-ns dib', href: 'http://www.ShowStubs.com' },
              'www.ShowStubs.com'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'fl w-50-ns w-100 pa4 bl-ns bw1 b--black h-100-ns h-50 flex-ns items-center-ns' },
          _react2.default.createElement(
            'div',
            { className: mw24r + " ml4-ns" },
            _react2.default.createElement(
              'div',
              { className: 'fl w-100 w-50-ns pa2' },
              _react2.default.createElement('img', { className: 'w-100 db center', src: '/static/StockBoard.png' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'fl w-100 w-50-ns pa2' },
              _react2.default.createElement('img', { className: 'w-100 db center', src: '/static/BeAPhotographer.png' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'fl w-100 w-50-ns pa2' },
              _react2.default.createElement('img', { className: 'w-100 db center', src: '/static/YDL.png' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'fl w-100 w-50-ns pa2' },
              _react2.default.createElement('img', { className: 'w-100 db center', src: '/static/ShowStubs.png' })
            )
          )
        )
      )
    )
  );
};

var vh60 = (0, _css2.default)({
  height: '60vh'
});

var mw24r = (0, _css2.default)({
  maxWidth: '24rem'
});
    if (module.hot) {
      module.hot.accept()

      var Component = module.exports.default || module.exports
      Component.__route = "/showstubs"

      if (module.hot.status() !== 'idle') {
        var components = next.router.components
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue

          if (components[r].Component.__route === "/showstubs") {
            next.router.update(r, Component)
          }
        }
      }
    }
  