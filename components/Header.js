import React from 'react'
import Head from '../components/Head'
import Link from 'next/link'
import css from 'next/css'

export default () => (
  <div className="absolute bg-white w-100">
    <Head />
    <nav className={`dt w-100 border-box pa3 ph4-ns pv3-ns pv3 ${vh10}`}>
      <Link href="/">
        <a className="dtc v-mid black fw6 f4 tracked-tight link dim" title="Home">
          Daniel Williams
        </a>
      </Link>
      <div className="dtc v-mid w-75 tr">
        <Link href="/self"><a className="link black-40 tracked underline-hover hover-black f6 f6-ns dib mr3 mr5-ns" title="Self">Self</a></Link>
        <Link href="/work"><a className="link black-40 tracked underline-hover hover-black f6 f6-ns dib mr3 mr5-ns" title="Work">Work</a></Link>
        <Link href="#"><a className="link black-40 tracked underline-hover hover-black f6 f6-ns dib" title="Contact">Contact</a></Link>
      </div>
    </nav>
  </div>
)

const vh10 = css({
  height: '10vh'
})
