import React from 'react'
import Head from 'next/head'

import SiteInfo from '../components/site-info'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Shahadat</title>
          <meta property="og:title" content="Shahadat" />
        </Head>
        <nav className="home-container01">
          <div className="home-container02">
            <img
              alt="Shahadat Pro Logo"
              src="/playground_assets/shahadat-pro-logo-white.svg"
              className="home-pasted-image"
            />
            <img
              alt="pastedImage"
              src="/playground_assets/pro-text-label-for-shahadat.svg"
              className="home-pasted-image1"
            />
          </div>
          <nav className="home-container03">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <p className="bodyRegular">Shop</p>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <p className="bodyRegular">Shots</p>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <p className="bodyRegular">Stories</p>
            </a>
            <a
              href="mailto:shout@shahadat.pro?subject=Hi Shahadat..."
              className="home-link3 bodyRegular button"
            >
              shout@shahadat.pro
            </a>
          </nav>
        </nav>
        <div className="home-container04">
          <h1 className="home-text03 hOne">
            <span>I&apos;m Shahadat!</span>
            <br></br>
            <span>Designer. Photographer.</span>
            <br></br>
            <span>Micropreneur.</span>
            <br></br>
          </h1>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-t8qq.svg"
            className="home-pasted-image2"
          />
        </div>
        <section className="home-section-title-sites">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-u6h9vi.svg"
            className="home-pasted-image3"
          />
          <div className="home-container05">
            <div className="home-container06"></div>
            <h2 className="home-text10 hTwo">Some Things I Made</h2>
            <div className="home-container07"></div>
          </div>
        </section>
        <div className="home-sites">
          <SiteInfo
            site_desc="Vector graphics, surface patterns, textures to decorate your surroundings."
            site_name="Vackground"
          ></SiteInfo>
          <SiteInfo
            site_desc="Multi-layered CSS gradients and backgrounds to make your webpage light."
            site_logo="/playground_assets/gradienta-dashed-logo.svg"
            site_name="Gradienta"
          ></SiteInfo>
          <SiteInfo
            site_desc="Coming Soon...!"
            site_logo="/playground_assets/whaticons-dashed-logo.svg"
            site_name="What..."
          ></SiteInfo>
        </div>
        <section className="home-section-title-products">
          <div className="home-container08">
            <div className="home-container09"></div>
            <h2 className="home-text11 hTwo">Some Other Tiny Things</h2>
            <div className="home-container10"></div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-95m.svg"
            className="home-pasted-image4"
          />
        </section>
        <section className="home-section-title-products1">
          <div className="home-container11">
            <div className="home-container12"></div>
            <h2 className="home-text12 hTwo">Share Things With Me</h2>
            <div className="home-container13"></div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-eums.svg"
            className="home-pasted-image5"
          />
        </section>
        <div className="home-container14">
          <div className="home-container15">
            <button className="home-button button bodyRegular social-button">
              <img
                src="/playground_assets/pastedimage-bgp.svg"
                alt="image"
                className="home-image"
              />
              <span>HiShahadat</span>
            </button>
            <button className="home-button1 button bodyRegular social-button">
              <img
                src="/playground_assets/pastedimage-bgp.svg"
                alt="image"
                className="home-image1"
              />
              <span>Shemul</span>
            </button>
            <button className="home-button2 button bodyRegular social-button">
              <img
                src="/playground_assets/pastedimage-bgp.svg"
                alt="image"
                className="home-image2"
              />
              <span>HelloShahadat</span>
            </button>
            <button className="home-button3 button bodyRegular social-button">
              <img
                src="/playground_assets/pastedimage-bgp.svg"
                alt="image"
                className="home-image3"
              />
              <span>HiShahadat</span>
            </button>
            <button className="home-button4 button bodyRegular social-button">
              <img
                src="/playground_assets/pastedimage-bgp.svg"
                alt="image"
                className="home-image4"
              />
              <span>HiShahadat</span>
            </button>
          </div>
          <a
            href="mailto:shout@shahadat.pro?subject=Hi Shahadat..."
            className="home-link4 bodyRegular button"
          >
            shout@shahadat.pro
          </a>
        </div>
        <footer className="home-container16">
          <span className="bodyRegular">© 2022, Shahadat.Pro</span>
        </footer>
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
            flex-direction: column;
            background-color: var(--dl-color-ui-950);
          }
          .home-container01 {
            gap: var(--dl-space-space-oneandhalfunit);
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            max-width: var(--dl-size-size-mainwidth);
            margin-top: var(--dl-space-space-twounit);
            align-items: center;
            padding-left: var(--dl-space-space-twounit);
            padding-right: var(--dl-space-space-twounit);
            justify-content: space-between;
          }
          .home-container02 {
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
          .home-container03 {
            gap: var(--dl-space-space-threeunit);
            display: flex;
            flex-flow: row wrap;
            align-items: center;
          }
          .home-link {
            display: contents;
          }
          .home-link1 {
            display: contents;
          }
          .home-link2 {
            display: contents;
          }
          .home-link3 {
            padding-top: var(--dl-space-space-oneandhalfunit);
            padding-left: var(--dl-space-space-threeunit);
            padding-right: var(--dl-space-space-threeunit);
            padding-bottom: var(--dl-space-space-oneandhalfunit);
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-mainwidth);
            align-items: center;
            padding-top: var(--dl-space-space-sixunit);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twentyunit);
            justify-content: center;
          }
          .home-text03 {
            width: 1392px;
            bottom: var(--dl-space-space-twounit);
            position: absolute;
            font-style: normal;
            text-align: center;
          }
          .home-pasted-image2 {
            width: 662px;
            height: 258px;
          }
          .home-section-title-sites {
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-sixteenunit);
            align-items: center;
            padding-top: var(--dl-space-space-oneunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneunit);
          }
          .home-pasted-image3 {
            width: 566px;
            height: 258px;
          }
          .home-container05 {
            gap: var(--dl-space-space-twounit);
            left: 0px;
            width: 100%;
            bottom: 0px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container06 {
            flex: 1;
            width: auto;
            height: 1px;
            display: flex;
            align-items: flex-start;
            background-image: linear-gradient(
              to right,
              #33ffb6 25%,
              rgba(255, 255, 255, 0) 0%
            );
            background-position: bottom;
            background-size: 12px 1px;
            background-repeat: repeat-x;
          }
          .home-text10 {
            padding-top: var(--dl-space-space-half);
            padding-bottom: var(--dl-space-space-half);
          }
          .home-container07 {
            flex: 1;
            width: auto;
            height: 1px;
            display: flex;
            align-items: flex-start;
            background-image: linear-gradient(
              to right,
              #33ffb6 25%,
              rgba(255, 255, 255, 0) 0%
            );
            background-position: bottom;
            background-size: 12px 1px;
            background-repeat: repeat-x;
          }
          .home-sites {
            gap: var(--dl-space-space-sixunit);
            flex: 0 0 auto;
            width: 1088px;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twelveunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-title-products {
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-sixteenunit);
            align-items: center;
            padding-top: var(--dl-space-space-oneunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneunit);
          }
          .home-container08 {
            gap: var(--dl-space-space-twounit);
            left: 0px;
            width: 100%;
            bottom: 0px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container09 {
            flex: 1;
            width: auto;
            height: 1px;
            display: flex;
            align-items: flex-start;
            background-image: linear-gradient(
              to right,
              #33ffb6 25%,
              rgba(255, 255, 255, 0) 0%
            );
            background-position: bottom;
            background-size: 12px 1px;
            background-repeat: repeat-x;
          }
          .home-text11 {
            padding-top: var(--dl-space-space-half);
            padding-bottom: var(--dl-space-space-half);
          }
          .home-container10 {
            flex: 1;
            width: auto;
            height: 1px;
            display: flex;
            align-items: flex-start;
            background-image: linear-gradient(
              to right,
              #33ffb6 25%,
              rgba(255, 255, 255, 0) 0%
            );
            background-position: bottom;
            background-size: 12px 1px;
            background-repeat: repeat-x;
          }
          .home-pasted-image4 {
            width: 748px;
            height: 258px;
          }
          .home-section-title-products1 {
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-sixteenunit);
            align-items: center;
            padding-top: var(--dl-space-space-oneunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneunit);
          }
          .home-container11 {
            gap: var(--dl-space-space-twounit);
            left: 0px;
            width: 100%;
            bottom: 0px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container12 {
            flex: 1;
            width: auto;
            height: 1px;
            display: flex;
            align-items: flex-start;
            background-image: linear-gradient(
              to right,
              #33ffb6 25%,
              rgba(255, 255, 255, 0) 0%
            );
            background-position: bottom;
            background-size: 12px 1px;
            background-repeat: repeat-x;
          }
          .home-text12 {
            padding-top: var(--dl-space-space-half);
            padding-bottom: var(--dl-space-space-half);
          }
          .home-container13 {
            flex: 1;
            width: auto;
            height: 1px;
            display: flex;
            align-items: flex-start;
            background-image: linear-gradient(
              to right,
              #33ffb6 25%,
              rgba(255, 255, 255, 0) 0%
            );
            background-position: bottom;
            background-size: 12px 1px;
            background-repeat: repeat-x;
          }
          .home-pasted-image5 {
            width: 598px;
            height: 258px;
          }
          .home-container14 {
            gap: var(--dl-space-space-twounit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1296px;
            margin-top: var(--dl-space-space-sixunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container15 {
            gap: var(--dl-space-space-twounit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            gap: var(--dl-space-space-threequarter);
            border-image: linear-gradient(
                264deg,
                #d300c5 0%,
                #ff1f4e 50%,
                #ffc400 100%
              )
              1;
            border-width: 1px;
            background-color: transparent;
          }
          .home-image {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-button1 {
            gap: var(--dl-space-space-threequarter);
            border-image: linear-gradient(
                264deg,
                #d300c5 0%,
                #ff1f4e 50%,
                #ffc400 100%
              )
              1;
            border-width: 1px;
            background-color: transparent;
          }
          .home-image1 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-button2 {
            gap: var(--dl-space-space-threequarter);
            border-image: linear-gradient(
                264deg,
                #d300c5 0%,
                #ff1f4e 50%,
                #ffc400 100%
              )
              1;
            border-width: 1px;
            background-color: transparent;
          }
          .home-image2 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-button3 {
            gap: var(--dl-space-space-threequarter);
            border-image: linear-gradient(
                264deg,
                #d300c5 0%,
                #ff1f4e 50%,
                #ffc400 100%
              )
              1;
            border-width: 1px;
            background-color: transparent;
          }
          .home-image3 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-button4 {
            gap: var(--dl-space-space-threequarter);
            border-image: linear-gradient(
                264deg,
                #d300c5 0%,
                #ff1f4e 50%,
                #ffc400 100%
              )
              1;
            border-width: 1px;
            background-color: transparent;
          }
          .home-image4 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-link4 {
            width: 100%;
            padding-top: var(--dl-space-space-oneandhalfunit);
            padding-left: var(--dl-space-space-threeunit);
            padding-right: var(--dl-space-space-threeunit);
            padding-bottom: var(--dl-space-space-oneandhalfunit);
            justify-content: center;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-sixteenunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 767px) {
            .home-container01 {
              padding-left: var(--dl-space-space-oneandhalfunit);
              padding-right: var(--dl-space-space-oneandhalfunit);
            }
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
