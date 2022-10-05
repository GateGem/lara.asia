import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
          <meta name="description" content="An company profile of Lara Platform Company. Its company that serve for Application Development (Mobile, Web and Desktop), UI UX Design and Maintenance" />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='web,app,ui,maintenance,company,Lara Platform,profile' />
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
