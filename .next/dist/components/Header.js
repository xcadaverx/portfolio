'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _link = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _css = require('/Users/xcadaverx/Desktop/dev/Web Projects/Portfolio/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'absolute bg-white w-100' },
    _react2.default.createElement(_Head2.default, null),
    _react2.default.createElement(
      'nav',
      { className: 'dt w-100 border-box pa3 ph4-ns pv3-ns pv3 ' + vh10 },
      _react2.default.createElement(
        _link2.default,
        { href: '/' },
        _react2.default.createElement(
          'a',
          { className: 'dtc v-mid black fw6 f4 tracked-tight link dim', title: 'Home' },
          'Daniel Williams'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'dtc v-mid w-75 tr' },
        _react2.default.createElement(
          _link2.default,
          { href: '/self' },
          _react2.default.createElement(
            'a',
            { className: 'link black-40 tracked underline-hover hover-black f6 f6-ns dib mr3 mr5-ns', title: 'Self' },
            'Self'
          )
        ),
        _react2.default.createElement(
          _link2.default,
          { href: '/work' },
          _react2.default.createElement(
            'a',
            { className: 'link black-40 tracked underline-hover hover-black f6 f6-ns dib mr3 mr5-ns', title: 'Work' },
            'Work'
          )
        ),
        _react2.default.createElement(
          _link2.default,
          { href: '#' },
          _react2.default.createElement(
            'a',
            { className: 'link black-40 tracked underline-hover hover-black f6 f6-ns dib', title: 'Contact' },
            'Contact'
          )
        )
      )
    )
  );
};

var vh10 = (0, _css2.default)({
  height: '10vh'
});