import React, { Component, PropTypes } from 'react';
import css from 'next/css';
import Lightbox from 'react-images';

export default class extends React.Component {
	constructor () {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}
	openLightbox (index, event) {

		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		})
    event.preventDefault()
	}
	closeLightbox () {
    console.log("trying to close lightbox")
		return () => this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		})

	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		})
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}
	renderGallery () {
		const { images } = this.props;

		if (!images) return;

		const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
			return (
				<a
					href={obj.src}
					className={thumbnail + " " + obj.orientation}
					key={i}
					onClick={(e) => this.openLightbox(i, e)}
				>
					<img src={obj.thumbnail} className={source} />
				</a>
			);
		});

		return (
			<div className={galleryCSS + " bg-green"}>
				{gallery}
			</div>
		);
	}
	render () {
		return (
			<div className="section">
				{this.props.heading && <h2>{this.props.heading}</h2>}
				{this.props.subheading && <p>{this.props.subheading}</p>}
				{this.renderGallery()}
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.props.images}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
					showThumbnails={this.props.showThumbnails}
					theme={this.props.theme}
				/>
			</div>
		);
	}
};



const galleryCSS = css({
		marginRight: '-2px',
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: '-4px'
		}
	})

	// anchor
const	thumbnail = css({
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: '0px',
		paddingRight: '2px',
		paddingBottom: '2px',
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: '4px',
			paddingBottom: '4px',
		}
	})

	// orientation
	const landscape = css({
		width: '30%',
	})

	const square = css({
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0,
		}
	})

	// actual <img />
	const source = css({
		border: '0px',
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto',
	})
