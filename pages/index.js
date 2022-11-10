import React from 'react'
import Head from 'next/head'

import SiteInfo from '../components/site-info'
import ProductCard from '../components/product-card'

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
              className="home-pasted-image01"
            />
          </div>
          <nav className="home-container03">
            <a
              href="https://shahadat.lemonsqueezy.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <div className="home-shop">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-o6g.svg"
                  className="home-pasted-image02"
                />
                <p className="bodyRegular">Shop</p>
              </div>
            </a>
            <a
              href="https://unsplash.com/@hishahadat"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link01"
            >
              <div className="home-shots">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-52sb.svg"
                  className="home-pasted-image03"
                />
                <p className="bodyRegular">Shots</p>
              </div>
            </a>
            <div className="home-stories">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-1fp.svg"
                className="home-pasted-image04"
              />
              <p className="bodyRegular">Stories</p>
              <span className="home-text03">SOON</span>
            </div>
            <a
              href="mailto:shout@shahadat.pro?subject=Shahadat, we need to talk!"
              className="home-email bodyRegular button-cta button"
            >
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-rqqr.svg"
                className="home-pasted-image05"
              />
              <span>shout@shahadat.pro</span>
            </a>
          </nav>
        </nav>
        <div className="home-container04">
          <h1 className="home-text05 hOne">
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
            className="home-pasted-image06"
          />
        </div>
        <section className="home-section-title-sites">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-u6h9vi.svg"
            className="home-pasted-image07"
          />
          <div className="home-container05">
            <div className="home-container06"></div>
            <h2 className="home-text12 hTwo">Some Things I Made</h2>
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
            <h2 className="home-text13 hTwo">Some Other Tiny Things</h2>
            <div className="home-container10"></div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-95m.svg"
            className="home-pasted-image08"
          />
        </section>
        <div className="home-container11">
          <a
            href="https://creativemarket.com/Vackground/3995334-Artless-Handwritten-Font"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProductCard
              image_src="/playground_assets/artless-cover-image-400h.jpg"
              product_name="Artless - Handwritten Font (Soon)"
              className="home-component3"
            ></ProductCard>
          </a>
          <a
            href="https://creativemarket.com/Vackground/4581272-Qronik-Geometric-Display-Font"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProductCard
              image_src="/playground_assets/qronik%20display%20font%20artistic%20cover-400h.jpg"
              product_name="Qronik - Geometric Display Font (Soon)"
              className="home-component4"
            ></ProductCard>
          </a>
          <a
            href="https://creativemarket.com/Vackground/5290365-Political-World-Map-Countries"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProductCard
              image_src="/playground_assets/world%20map%20countries%20cover-400h.jpg"
              product_name="World Map - Light &amp; Dark (Soon)"
              className="home-component5"
            ></ProductCard>
          </a>
        </div>
        <section className="home-section-title-products1">
          <div className="home-container12">
            <div className="home-container13"></div>
            <h2 className="home-text14 hTwo">Share Things With Me</h2>
            <div className="home-container14"></div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-eums.svg"
            className="home-pasted-image09"
          />
        </section>
        <div className="home-container15">
          <div className="home-container16">
            <a
              href="https://twitter.com/hishahadat"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05 button-social button"
            >
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-qvdn.svg"
                className="home-pasted-image10"
              />
              <span className="bodyRegular">HiShahadat</span>
            </a>
            <a
              href="https://www.producthunt.com/@shemul"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link06 button-social button"
            >
              <img
                alt="image"
                src="/playground_assets/pastedimage-3nmf.svg"
                className="home-image"
              />
              <span className="bodyRegular">Shemul</span>
            </a>
            <a
              href="https://www.messenger.com/t/HelloShahadat"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link07 button-social button"
            >
              <img
                alt="image"
                src="/playground_assets/pastedimage-zu2u.svg"
                className="home-image1"
              />
              <span className="bodyRegular">HelloShahadat</span>
            </a>
            <a
              href="https://t.me/hishahadat"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08 button-social button"
            >
              <img
                alt="image"
                src="/playground_assets/pastedimage-c7cd.svg"
                className="home-image2"
              />
              <span className="bodyRegular">HiShahadat</span>
            </a>
            <a
              href="https://www.instagram.com/hishahadat/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09 button-social bodyRegular button"
            >
              <img
                alt="image"
                src="/playground_assets/pastedimage-bgp.svg"
                className="home-image3"
              />
              <span>HiShahadat</span>
            </a>
          </div>
          <a
            href="mailto:shout@shahadat.pro?subject=Hi Shahadat..."
            className="home-link10 bodyRegular button-cta button"
          >
            shout@shahadat.pro
          </a>
        </div>
        <footer className="home-container17">
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
          .home-pasted-image01 {
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
          .home-shop {
            gap: var(--dl-space-space-threequarter);
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threequarter);
            padding-right: var(--dl-space-space-threequarter);
            padding-bottom: 0px;
            text-decoration: none;
          }
          .home-pasted-image02 {
            width: 24px;
            height: 24px;
          }
          .home-link01 {
            display: contents;
          }
          .home-shots {
            gap: var(--dl-space-space-threequarter);
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threequarter);
            padding-right: var(--dl-space-space-threequarter);
            padding-bottom: 0px;
            text-decoration: none;
          }
          .home-pasted-image03 {
            width: 24px;
            height: 24px;
          }
          .home-stories {
            gap: var(--dl-space-space-threequarter);
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threequarter);
            padding-right: var(--dl-space-space-threequarter);
            padding-bottom: 0px;
          }
          .home-pasted-image04 {
            width: 24px;
            height: 25px;
          }
          .home-text03 {
            top: 0px;
            right: 0px;
            opacity: 0.5;
            position: absolute;
            font-size: 10px;
            font-style: normal;
            font-weight: 300;
            line-height: 100%;
          }
          .home-email {
            display: flex;
            margin-left: var(--dl-space-space-threequarter);
            padding-top: var(--dl-space-space-oneandhalfunit);
            padding-left: var(--dl-space-space-threeunit);
            padding-right: var(--dl-space-space-threeunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunit);
            text-decoration: none;
          }
          .home-pasted-image05 {
            width: 25px;
            height: 24px;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-mainwidth);
            margin-top: var(--dl-space-space-sixunit);
            align-items: center;
            padding-top: var(--dl-space-space-eightunit);
            padding-left: var(--dl-space-space-twounit);
            padding-right: var(--dl-space-space-twounit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text05 {
            width: 100%;
            z-index: 2;
            align-self: center;
            font-style: normal;
            text-align: center;
            padding-top: var(--dl-space-space-twounit);
            padding-bottom: var(--dl-space-space-twounit);
          }
          .home-pasted-image06 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: auto;
            z-index: 1;
            position: absolute;
            max-width: 662px;
            margin-left: auto;
            margin-right: auto;
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
          .home-pasted-image07 {
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
          .home-text12 {
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
          .home-text13 {
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
          .home-pasted-image08 {
            width: 748px;
            height: 258px;
          }
          .home-container11 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fourunit);
            max-width: var(--dl-size-size-mainwidth);
            margin-top: var(--dl-space-space-eightunit);
            padding-left: var(--dl-space-space-twounit);
            padding-right: var(--dl-space-space-twounit);
            grid-template-columns: repeat(3, 480px);
          }
          .home-component3 {
            text-decoration: none;
          }
          .home-component4 {
            text-decoration: none;
          }
          .home-component5 {
            text-decoration: none;
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
          .home-container12 {
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
          .home-text14 {
            padding-top: var(--dl-space-space-half);
            padding-bottom: var(--dl-space-space-half);
          }
          .home-container14 {
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
          .home-pasted-image09 {
            width: 598px;
            height: 258px;
          }
          .home-container15 {
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
          .home-container16 {
            gap: var(--dl-space-space-twounit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link05 {
            border-color: #1da1f2;
            text-decoration: none;
          }
          .home-pasted-image10 {
            width: 25px;
            height: 24px;
          }
          .home-link06 {
            border-color: #da552f;
            text-decoration: none;
          }
          .home-image {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-link07 {
            border-image: linear-gradient(
                264deg,
                #ff656d 0%,
                #ca40c6 50%,
                #267ffe 100%
              )
              1;
            text-decoration: none;
          }
          .home-image1 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-link08 {
            border-color: #29aaec;
            text-decoration: none;
          }
          .home-image2 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-link09 {
            gap: var(--dl-space-space-threequarter);
            border-image: linear-gradient(
                264deg,
                #d300c5 0%,
                #ff1f4e 50%,
                #ffc400 100%
              )
              1;
            text-decoration: none;
            background-color: transparent;
          }
          .home-image3 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .home-link10 {
            width: 100%;
            padding-top: var(--dl-space-space-oneandhalfunit);
            padding-left: var(--dl-space-space-threeunit);
            padding-right: var(--dl-space-space-threeunit);
            padding-bottom: var(--dl-space-space-oneandhalfunit);
            justify-content: center;
          }
          .home-container17 {
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
            .home-container04 {
              padding-left: 0px;
            }
            .home-text05 {
              font-size: 48px;
              line-height: 125%;
              letter-spacing: -1px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
