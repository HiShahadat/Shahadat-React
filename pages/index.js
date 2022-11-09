import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Shahadat</title>
          <meta property="og:title" content="Shahadat" />
        </Head>
        <div className="home-container1">
          <div className="home-container2">
            <img
              alt="Shahadat Pro Logo"
              src="/playground_assets/pastedimage-5qll.svg"
              className="home-pasted-image"
            />
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-nk3t.svg"
              className="home-pasted-image1"
            />
          </div>
          <nav className="home-container3">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Shop
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Shots
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stories
            </a>
            <a
              href="mailto:shout@shahadat.pro?subject=Hi Shahadat..."
              className="content button"
            >
              shout@shahadat.pro
            </a>
          </nav>
        </div>
        <div className="home-container4">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-99ft.svg"
            className="home-pasted-image2"
          />
          <h1 className="home-text h-One">
            <span>I&apos;m Shahadat</span>
            <br></br>
            <span>Designer, Photographer,</span>
            <br></br>
            <span>Micropreneur</span>
            <br></br>
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            color: var(--dl-color-ui-0);
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            padding-left: var(--dl-space-space-twounit);
            padding-right: var(--dl-space-space-twounit);
            flex-direction: column;
            background-color: var(--dl-color-ui-950);
          }
          .home-container1 {
            gap: var(--dl-space-space-oneandhalfunit);
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            max-width: var(--dl-size-size-mainwidth);
            margin-top: var(--dl-space-space-twounit);
            align-items: center;
            justify-content: space-between;
          }
          .home-container2 {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .home-pasted-image {
            width: 145px;
            height: 24px;
          }
          .home-pasted-image1 {
            top: -6px;
            right: -18px;
            width: 22px;
            height: 8px;
            position: absolute;
          }
          .home-container3 {
            gap: var(--dl-space-space-threeunit);
            display: flex;
            flex-flow: row wrap;
            align-items: center;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-mainwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunit);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixteenunit);
            justify-content: center;
          }
          .home-pasted-image2 {
            width: 372px;
            height: 320;
          }
          .home-text {
            width: 1392px;
            bottom: var(--dl-space-space-twounit);
            position: absolute;
            font-style: normal;
            text-align: center;
          }
          @media (max-width: 479px) {
            .home-container {
              padding: var(--dl-space-space-oneandhalfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
