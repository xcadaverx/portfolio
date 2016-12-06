import React from 'react'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import css from 'next/css'

const DEFAULT_IMAGES = [
	{ id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
	{ id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

function makeUnsplashSrc (id) {
	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet (id, size) {
	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail (id, orientation = 'landscape') {
	const dimensions = orientation === 'square'
		? 'w=300&h=300'
		: 'w=240&h=159';

	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

export default class extends React.Component {

  render () {
    return (

      <div className="avenir">
      <Header />
      <div className='vh-100 w-100 flex items-center justify-center'>
        <div className={vh60 + " bg-white h-100"}>

            <div className="fl w-50-ns w-100 pa5 b--black h-100-ns flex-ns items-center-ns justify-end-ns">
              <div className={"tc " + mw24r}>
                <h3>YogiDoList</h3>
                <p>YogiDoList is a social platform to track your yoga practice. You will start your journey by learning the basic poses that will help strengthen and prepare the body for a deeper practice. Persistance and perseverance are key aspects of yoga, so you must practice to maintain your rank. Each week you will be given more difficult poses than the last. The entire journey from beginner to expert spans over 300 weeks.</p>
                <a className="link black-40 tracked underline-hover hover-black f6 mt3 f6-ns dib" href="http://www.YogiDoList.com">www.YogiDoList.com</a>
              </div>
            </div>
          <div className="fl w-50-ns w-100 pa4 bl-ns bw1 b--black h-100-ns h-50 flex-ns items-center-ns">
            <div className={mw24r + " ml4-ns"}>
              <Gallery images={DEFAULT_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
                src: makeUnsplashSrc(id),
                thumbnail: makeUnsplashThumbnail(id, orientation),
                caption,
                orientation,
                useForDemo,
              }))} />
            </div>
          </div>

        </div>
      </div>
      </div>
    )
  }
}

const vh60 = css({
  height: '60vh'
})

const mw24r = css({
  maxWidth: '24rem'
})
