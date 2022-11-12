import React from 'react'

import PropTypes from 'prop-types'

const SiteInfo = (props) => {
  return (
    <>
      <div className="site-info site-info-site-info">
        <div className="site-info-container">
          <div className="site-info-container1">
            <h2 className="site-info-text hTwo">{props.site_name}</h2>
            <img
              alt={props.arrow_new_tab}
              src="/playground_assets/big-arrow-top-right-white.svg"
              className="site-info-pasted-image arrow-tab"
            />
          </div>
          <span className="site-info-text1 bodyLarge">{props.site_desc}</span>
        </div>
        <img
          alt={props.pastedImage_alt}
          src={props.site_logo}
          className="site-info-pasted-image1"
        />
      </div>
      <style jsx>
        {`
          .site-info-container {
            gap: var(--dl-space-space-twounit);
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .site-info-container1 {
            gap: var(--dl-space-space-oneunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .site-info-text {
            color: var(--dl-color-ui-0);
          }
          .site-info-pasted-image {
            display: none;
          }
          .site-info-text1 {
            color: var(--dl-color-ui-0);
          }
          .site-info-pasted-image1 {
            width: 320px;
            height: 320px;
          }
          @media (max-width: 767px) {
            .site-info-container {
              width: 100%;
              align-items: center;
            }
            .site-info-pasted-image1 {
              max-height: auto;
            }
          }
          @media (max-width: 479px) {
            .site-info-text {
              font-size: 32px;
              letter-spacing: -1px;
            }
            .site-info-text1 {
              font-size: 18px;
              letter-spacing: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

SiteInfo.defaultProps = {
  site_logo: '/playground_assets/vackground-dashed-logo.svg',
  arrow_new_tab: 'pastedImage',
  site_desc: 'Lorem ipsum dolor site amet!',
  site_name: 'Website',
  pastedImage_alt: 'pastedImage',
}

SiteInfo.propTypes = {
  site_logo: PropTypes.string,
  arrow_new_tab: PropTypes.string,
  site_desc: PropTypes.string,
  site_name: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default SiteInfo
