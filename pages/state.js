import React from 'react'
import Header from '../components/Header'
import css from 'next/css'
import Gallery from 'react-photo-gallery'


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

              <Gallery photos={PHOTO_SET} />

            </div>
          </div>

        </div>
      </div>
      </div>
    )
  }
}

const PHOTO_SET = [
  {
    src: '/static/YDL.png',
    width: 681,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage:{
      src: '/static/YDL.png'
    }
  },
  {
    src: '/static/YDL.png',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
      src: '/static/YDL.png'
    }
  }
];

const vh60 = css({
  height: '60vh'
})

const mw24r = css({
  maxWidth: '24rem'
})
