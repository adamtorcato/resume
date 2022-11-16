/* eslint-disable @typescript-eslint/no-explicit-any */
import Document, { Head, Html, Main, NextScript } from 'next/document'

import React from 'react'
import { extractCritical } from '@emotion/server'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any): Promise<any> {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style data-emotion-css={critical.ids.join(' ')} dangerouslySetInnerHTML={{ __html: critical.css }} />
      </React.Fragment>
    )

    return initialProps
  }

  render(): JSX.Element {
    //<Html lang="en" tw="h-full bg-gray-500" data-js-focus-visible="">
    // <body css={tw`text-red-900`}></body>
    return (
      <Html lang="en" className="h-full bg-white">
        <Head />
        <body className="flex flex-col h-full min-h-full font-sans antialiased text-gray-600">
          <noscript>You need to enable Javascript to run this app</noscript>
          <Main />
          <NextScript />
          {/* <!-- Cloudflare Web Analytics --> */}
          {/* <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "a73ffddb8655454595dd707945a6f6a5"}'></script> */}
          {/* <!-- End Cloudflare Web Analytics --> */}
        </body>
      </Html>
    )
  }
}
