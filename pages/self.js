import React from 'react'
import Header from '../components/Header'
import css from 'next/css'

export default () => (
  <div className="avenir">
  <Header />
  <div className='vh-100 w-100 flex items-center justify-center'>
    <div className={vh60 + " bg-white w-100"}>

        <div className="fl w-50-ns w-100 pa5 b--black h-100-ns h-50 flex items-center justify-end">
          <img src="/static/self.png"/>
        </div>
      <div className="fl w-50-ns w-100 pa4 bl-ns bw1 b--black h-100-ns h-50 flex items-center">
        <div className={" mw-100 flex-none tc"}>
          <div>
            <p className="">Mobile-first developer with a passion for art, style, design, and love.</p>
          </div>
          <div className="">
            <a className="f6 ma2 w3 link dim br2 ph3 pv2 dib white" style={{backgroundColor: '#458eff'}} href="http://www.instagram.com/xcadaverx">Instagram</a>
            <a className="f6 ma2 w3 link dim br2 ph3 pv2 dib white bg-light-blue" href="http://www.twitter.com/xcadaverx">Twitter</a>
            <a className="f6 ma2 w3 link dim br2 ph3 pv2 dib white bg-dark-gray" href="http://www.github.com/xcadaverx">Github</a>
            <a className="f6 ma2 w3 link dim br2 ph3 pv2 dib white bg-gray" href="http://www.YogiDoList.com/resume">Resumé</a>
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
  '@media (max-width: 600px)': {
    maxWidth: '500px'
  }
})
