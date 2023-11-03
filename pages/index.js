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
            background-color: #0b0a14ff;
          }
        `}
      </style>
    </>
  )
}

export default Home
