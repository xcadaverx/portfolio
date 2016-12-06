webpackHotUpdate(8,{

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(95);

	var _Header2 = _interopRequireDefault(_Header);

	var _css = __webpack_require__(90);

	var _css2 = _interopRequireDefault(_css);

	var _link = __webpack_require__(97);

	var _link2 = _interopRequireDefault(_link);

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
	        { className: vh60 + " mw6" },
	        _react2.default.createElement(
	          'div',
	          { className: 'fl w-100 w-50-ns pa3' },
	          _react2.default.createElement(
	            _link2.default,
	            { href: '/stockboard' },
	            _react2.default.createElement('img', { className: 'w-100 db center dim', src: '/static/StockBoard.png' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'fl w-100 w-50-ns pa3' },
	          _react2.default.createElement(
	            _link2.default,
	            { href: '/bap' },
	            _react2.default.createElement('img', { className: 'w-100 db center dim', src: '/static/BeAPhotographer.png' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'fl w-100 w-50-ns pa3' },
	          _react2.default.createElement(
	            _link2.default,
	            { href: '/ydl' },
	            _react2.default.createElement('img', { className: 'w-100 db center dim', src: '/static/YDL.png' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'fl w-100 w-50-ns pa3' },
	          _react2.default.createElement(
	            _link2.default,
	            { href: '/showstubs' },
	            _react2.default.createElement('img', { className: 'w-100 db center dim', src: '/static/ShowStubs.png' })
	          )
	        )
	      )
	    )
	  );
	};

	var vh60 = (0, _css2.default)({
	  height: '60vh'
	});
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/work"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/work") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})