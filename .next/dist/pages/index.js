'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _css = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _reactTypist = require('react-typist');

var _reactTypist2 = _interopRequireDefault(_reactTypist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'avenir' },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://raw.githubusercontent.com/jstejada/react-typist/master/dist/Typist.css' })
    ),
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'vh-100 w-100 flex' },
      _react2.default.createElement(
        'div',
        { className: 'w-100 tc self-center' },
        _react2.default.createElement(
          'div',
          { className: consoleBG + " dib br3 shadow-3 mh3" },
          _react2.default.createElement('img', { src: '/static/editor-header.png' }),
          _react2.default.createElement(
            'div',
            { className: 'pl3 pv3 w-100 h5 courier fw1 tl white' },
            _react2.default.createElement(
              _reactTypist2.default,
              { className: 'dib lh-copy', cursor: { show: true, blink: true, element: '_' }, startDelay: 1500 },
              firstLine,
              ' ',
              _react2.default.createElement('br', null),
              '\xA0\xA0',
              secondLine,
              ' ',
              _react2.default.createElement('br', null),
              thirdLine,
              ' ',
              _react2.default.createElement('br', null),
              '\xA0\xA0',
              fourthLine,
              ' ',
              _react2.default.createElement('br', null),
              fifthLine,
              ' ',
              _react2.default.createElement('br', null)
            )
          )
        )
      )
    )
  );
};

var consoleBG = (0, _css2.default)({
  background: '#323842'
});

var firstLine = 'do {';
var secondLine = 'try everything()';
var thirdLine = '} catch { _ in';
var fourthLine = 'print(\u201CThere is only try, and try harder.\u201D)';
var fifthLine = '}';
    if (module.hot) {
      module.hot.accept()

      var Component = module.exports.default || module.exports
      Component.__route = "/"

      if (module.hot.status() !== 'idle') {
        var components = next.router.components
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue

          if (components[r].Component.__route === "/") {
            next.router.update(r, Component)
          }
        }
      }
    }
  