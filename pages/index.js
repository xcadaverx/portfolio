import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import css from 'next/css'
import Typist from 'react-typist'

export default () => (
  <div className="avenir">

    <Head>
      <link rel="stylesheet" href="/static/Typist.css"/>
    </Head>

    <Header />
    <div className='vh-100 w-100 flex'>
      <div className="w-100 tc self-center">
        <div className={consoleBG + " dib br3 shadow-3 mh3"}>
          <img src="/static/editor-header.png" />
          <div className="pl3 pv3 w-100 h5 courier fw1 tl white">
            <Typist className="dib lh-copy" cursor={{show:true, blink: true, element: '_'}} startDelay={1500}>
              {firstLine} <br />
              &nbsp;&nbsp;{secondLine} <br />
              {thirdLine} <br />
              &nbsp;&nbsp;{fourthLine} <br />
              {fifthLine} <br />
            </Typist>
          </div>
        </div>
      </div>
    </div>

  </div>
)

const consoleBG = css({
  background: '#323842'
})

const firstLine = `do {`
const secondLine = `try everything()`
const thirdLine = `} catch { _ in`
const fourthLine = `print(“There is only try, and try harder.”)`
const fifthLine = `}`
