import React from 'react'

import PropTypes from 'prop-types'

const SiteInfo = (props) => {
  return (
    <>
      <div className="site-info-site-info site-info">
        <div className="site-info-container">
          <div className="site-info-container1">
            <h2 className="hTwo">{props.site_name}</h2>
            <img
              alt={props.arrow_new_tab}
              src="/playground_assets/big-arrow-top-right-white.svg"
              className="site-info-pasted-image arrow-tab"
            />
          </div>
          <span className="bodyLarge">{props.site_desc}</span>
        </div>
        <img
          alt={props.pastedImage_alt}
          src={props.site_logo}
          className="site-info-pasted-image1"
        />
      </div>
      <style jsx>
        {`
          .site-info-site-info {
            transition: 0.3s;
          }

          .site-info-container {
            gap: var(--dl-space-space-twounit);
            width: 100%;
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
          .site-info-pasted-image {
            display: none;
          }
          .site-info-pasted-image1 {
            width: 320px;
            height: 320px;
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
