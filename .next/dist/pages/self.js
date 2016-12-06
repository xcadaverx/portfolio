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
        { className: vh60 + " bg-white w-100" },
        _react2.default.createElement(
          'div',
          { className: 'fl w-50-ns w-100 pa5 b--black h-100-ns h-50 flex items-center justify-end' },
          _react2.default.createElement('img', { src: '/static/self.png' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'fl w-50-ns w-100 pa4 bl-ns bw1 b--black h-100-ns h-50 flex items-center' },
          _react2.default.createElement(
            'div',
            { className: " mw-100 flex-none tc" },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { className: '' },
                'Mobile-first developer with a passion for art, style, design, and love.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: '' },
              _react2.default.createElement(
                'a',
                { className: 'f6 ma2 w3 link dim br2 ph3 pv2 dib white', style: { backgroundColor: '#458eff' }, href: 'http://www.instagram.com/xcadaverx' },
                'Instagram'
              ),
              _react2.default.createElement(
                'a',
                { className: 'f6 ma2 w3 link dim br2 ph3 pv2 dib white bg-light-blue', href: 'http://www.twitter.com/xcadaverx' },
                'Twitter'
              ),
              _react2.default.createElement(
                'a',
                { className: 'f6 ma2 w3 link dim br2 ph3 pv2 dib white bg-dark-gray', href: 'http://www.github.com/xcadaverx' },
                'Github'
              ),
              _react2.default.createElement(
                'a',
                { className: 'f6 ma2 w3 link dim br2 ph3 pv2 dib white bg-gray', href: 'http://www.YogiDoList.com/resume' },
                'Resum\xE9'
              )
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
  '@media (max-width: 600px)': {
    maxWidth: '500px'
  }
});
    if (module.hot) {
      module.hot.accept()

      var Component = module.exports.default || module.exports
      Component.__route = "/self"

      if (module.hot.status() !== 'idle') {
        var components = next.router.components
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue

          if (components[r].Component.__route === "/self") {
            next.router.update(r, Component)
          }
        }
      }
    }
  