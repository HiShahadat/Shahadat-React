import React from 'react'

import PropTypes from 'prop-types'

const ShapeGrid = (props) => {
  return (
    <>
      <div className={`shape-grid-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="shape-grid-image"
        />
        <span className="shape-grid-text p4">{props.text}</span>
      </div>
      <style jsx>
        {`
          .shape-grid-container {
            gap: var(--dl-space-space-4);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 168px;
            align-items: center;
            padding-top: var(--dl-space-space-6);
            padding-left: var(--dl-space-space-6);
            padding-right: var(--dl-space-space-6);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-6);
            justify-content: center;
          }
          .shape-grid-image {
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .shape-grid-text {
            color: var(--dl-color-ui-400);
            text-align: center;
          }

          @media (max-width: 479px) {
            .shape-grid-container {
              max-width: 124px;
            }
          }
        `}
      </style>
    </>
  )
}

ShapeGrid.defaultProps = {
  rootClassName: '',
  image_alt: 'abstract vector svg shape',
  text: 'akriti',
  image_src: '/akriti/pudina.svg',
}

ShapeGrid.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default ShapeGrid
