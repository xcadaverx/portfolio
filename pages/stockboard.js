import React from 'react'
import Header from '../components/Header'
import css from 'next/css'

export default () => (
  <div className="avenir">
  <Header />
  <div className='vh-100 w-100 flex items-center justify-center'>
    <div className={vh60 + " bg-white h-100"}>

        <div className="fl w-50-ns w-100 pa5 b--black h-100-ns flex-ns items-center-ns justify-end-ns">
          <div className={"tc " + mw24r}>
            <h3>StockBoard</h3>
            <p>Stock Board makes it easy to keep track of the news on your stocks in real-time, so you never miss a market moving press release or company milestone from a stock in your portfolio again.</p>
<p>It's a two way communication application between investors and stocks.</p>
<p>A fast line of communication between companies and their shareholders leads to better, more educated investment decisions.</p>
            <a className="link black-40 tracked underline-hover hover-black f6 mt3 f6-ns dib" href="http://www.StockBoard.com">www.StockBoard.com</a>
          </div>
        </div>
      <div className="fl w-50-ns w-100 pa4 bl-ns bw1 b--black h-100-ns h-50 flex-ns items-center-ns">
        <div className={mw24r + " ml4-ns"}>
          <div className="fl w-100 w-50-ns pa2">
            <img className="w-100 db center" src="/static/StockBoard.png"/>
          </div>
          <div className="fl w-100 w-50-ns pa2">
            <img className="w-100 db center" src="/static/BeAPhotographer.png"/>
          </div>
          <div className="fl w-100 w-50-ns pa2">
            <img className="w-100 db center" src="/static/YDL.png"/>
          </div>
          <div className="fl w-100 w-50-ns pa2">
            <img className="w-100 db center" src="/static/ShowStubs.png"/>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>
)

const vh60 = css({
  height: '60vh'
})

const mw24r = css({
  maxWidth: '24rem'
})
