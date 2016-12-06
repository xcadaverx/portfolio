import React from 'react'
import Header from '../components/Header'
import css from 'next/css'
import Link from 'next/link'

export default () => (
  <div className="avenir">
    <Header />
    <div className='vh-100 w-100 flex items-center justify-center'>
      <div className={vh60 + " mw6"}>
        <div className="fl w-100 w-50-ns pa3">
          <Link href="/stockboard">
            <img className="w-100 db center dim" src="/static/StockBoard.png"/>
          </Link>
        </div>
        <div className="fl w-100 w-50-ns pa3">
          <Link href="/bap">
            <img className="w-100 db center dim" src="/static/BeAPhotographer.png"/>
          </Link>
        </div>
        <div className="fl w-100 w-50-ns pa3">
          <Link href="/ydl">
            <img className="w-100 db center dim" src="/static/YDL.png"/>
          </Link>
        </div>
        <div className="fl w-100 w-50-ns pa3">
          <Link href="/showstubs">
            <img className="w-100 db center dim" src="/static/ShowStubs.png"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const vh60 = css({
  height: '60vh'
})
