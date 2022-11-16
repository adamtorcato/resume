import { Helmet } from 'react-helmet-async'
import React from 'react'

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any
}
//<Helmet htmlAttributes={{ lang: config.lang }} title={config.title} titleTemplate={`%s | ${config.title}`}>
const AppHeaderTags = ({ config }: IProps): JSX.Element => {
  return (
    <Helmet htmlAttributes={{ lang: config.lang }}>
      {/* General tags */}
      <title>{config.title}</title>
      <meta charSet="utf-8" />
      <meta name="keywords" content={config.keywords.join(',')} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={config.description} />
      <meta name="image" content={config.siteImage} />
      {/* Facebook Open Graph Card tags */}
      {config.siteFBAppID.length > 0 && <meta property="fb:app_id" content={config.facebook.appID} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image:width" content="1050" />
      <meta property="og:image:height" content="550" />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:image" content={config.siteImage} />
      <meta property="og:site_name" content={config.title}></meta>
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter.creator} />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={config.twitter.image} />
      <meta name="twitter:image:alt" content={config.twitter.imageAlt}></meta>
      <meta name="twitter:site" content={config.twitter.site}></meta>
      {/* Site Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href={config.icons.appleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={config.icons.icon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={config.icons.icon16} />
      <link rel="manifest" href={config.manifest} />
      <link rel="mask-icon" href={config.maskIcon} color={config.maskColor} />
      <link rel="shortcut icon" href={config.shortcutIcon} />
      <meta name="msapplication-config" content={config.browserConfig} />
      <meta name="theme-color" content={config.themeColor} />
      {/* Stylesheets */}
      {/* <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,400i,500" rel="stylesheet" /> */}
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link href="//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet"></link>
    </Helmet>
  )
}

export default AppHeaderTags
