import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: "UncutSans-Light";\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 300;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: -0.5px;\n    line-height: 32px;\n    color: var(--dl-color-ui-1000);\n    background-color: var(--dl-color-ui-0);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                "</noscript><!--This is the head section-->\n<script>function updateCountdown() {\n  const targetDate = new Date('2023-11-31 23:59:59').getTime();\n  const currentDate = new Date().getTime();\n  const timeRemaining = targetDate - currentDate;\n\n  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));\n  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));\n  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);\n\n  document.getElementById('days').textContent = String(days).padStart(2, '0');\n  document.getElementById('hours').textContent = String(hours).padStart(2, '0');\n  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');\n  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');\n\n  if (timeRemaining <= 0) {\n    clearInterval(countdownInterval);\n    document.getElementById('countdown').textContent = 'Offer Expired';\n  }\n}\n\nupdateCountdown();\nconst countdownInterval = setInterval(updateCountdown, 1000);\n</script>\n<style>\n  @keyframes blink {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n</style><noscript>",
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<!-- Your body code here -->\n<!-- <script type=\"text/javascript\"> ... </script> --> \n    <script data-section-id='navbar' src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>\n    ",
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
