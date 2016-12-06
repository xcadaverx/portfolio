webpackHotUpdate(9,{

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _inherits2 = __webpack_require__(1);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _getPrototypeOf = __webpack_require__(77);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(81);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(82);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(86);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _css = __webpack_require__(90);

	var _css2 = _interopRequireDefault(_css);

	var _reactImages = __webpack_require__(133);

	var _reactImages2 = _interopRequireDefault(_reactImages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_React$Component) {
		(0, _inherits3.default)(_class, _React$Component);

		function _class() {
			(0, _classCallCheck3.default)(this, _class);

			var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

			_this.state = {
				lightboxIsOpen: false,
				currentImage: 0
			};

			_this.closeLightbox = _this.closeLightbox.bind(_this);
			_this.gotoNext = _this.gotoNext.bind(_this);
			_this.gotoPrevious = _this.gotoPrevious.bind(_this);
			_this.gotoImage = _this.gotoImage.bind(_this);
			_this.handleClickImage = _this.handleClickImage.bind(_this);
			_this.openLightbox = _this.openLightbox.bind(_this);
			return _this;
		}

		(0, _createClass3.default)(_class, [{
			key: 'openLightbox',
			value: function openLightbox(index, event) {

				this.setState({
					currentImage: index,
					lightboxIsOpen: true
				});
				event.preventDefault();
			}
		}, {
			key: 'closeLightbox',
			value: function closeLightbox() {
				var _this2 = this;

				console.log("trying to close lightbox");
				return function () {
					return _this2.setState({
						currentImage: 0,
						lightboxIsOpen: false
					});
				};
			}
		}, {
			key: 'gotoPrevious',
			value: function gotoPrevious() {
				this.setState({
					currentImage: this.state.currentImage - 1
				});
			}
		}, {
			key: 'gotoNext',
			value: function gotoNext() {
				this.setState({
					currentImage: this.state.currentImage + 1
				});
			}
		}, {
			key: 'gotoImage',
			value: function gotoImage(index) {
				this.setState({
					currentImage: index
				});
			}
		}, {
			key: 'handleClickImage',
			value: function handleClickImage() {
				if (this.state.currentImage === this.props.images.length - 1) return;

				this.gotoNext();
			}
		}, {
			key: 'renderGallery',
			value: function renderGallery() {
				var _this3 = this;

				var images = this.props.images;


				if (!images) return;

				var gallery = images.filter(function (i) {
					return i.useForDemo;
				}).map(function (obj, i) {
					return _react2.default.createElement(
						'a',
						{
							href: obj.src,
							className: thumbnail + " " + obj.orientation,
							key: i,
							onClick: function onClick(e) {
								return _this3.openLightbox(i, e);
							}
						},
						_react2.default.createElement('img', { src: obj.thumbnail, className: source })
					);
				});

				return _react2.default.createElement(
					'div',
					{ className: galleryCSS + " bg-green" },
					gallery
				);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'section' },
					this.props.heading && _react2.default.createElement(
						'h2',
						null,
						this.props.heading
					),
					this.props.subheading && _react2.default.createElement(
						'p',
						null,
						this.props.subheading
					),
					this.renderGallery(),
					_react2.default.createElement(_reactImages2.default, {
						currentImage: this.state.currentImage,
						images: this.props.images,
						isOpen: this.state.lightboxIsOpen,
						onClickImage: this.handleClickImage,
						onClickNext: this.gotoNext,
						onClickPrev: this.gotoPrevious,
						onClickThumbnail: this.gotoImage,
						onClose: this.closeLightbox,
						showThumbnails: this.props.showThumbnails,
						theme: this.props.theme
					})
				);
			}
		}]);
		return _class;
	}(_react2.default.Component);

	exports.default = _class;
	;

	var galleryCSS = (0, _css2.default)({
		marginRight: '-2px',
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: '-4px'
		}
	});

	// anchor
	var thumbnail = (0, _css2.default)({
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: '0px',
		paddingRight: '2px',
		paddingBottom: '2px',
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: '4px',
			paddingBottom: '4px'
		}
	});

	// orientation
	var landscape = (0, _css2.default)({
		width: '30%'
	});

	var square = (0, _css2.default)({
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0
		}
	});

	// actual <img />
	var source = (0, _css2.default)({
		border: '0px',
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto'
	});

/***/ }

})