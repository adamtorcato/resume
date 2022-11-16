import appConfig from '.'

const themeColor = '#ffffff'
const maskColor = '#5bbad5'
const twitterCreator = '@rtorcato'
const twitterImageAlt = 'Richard Torcato'

const appHeaderTagConfig = {
  themeColor,
  favIconPath: appConfig.favIconPath,
  siteFBAppID: '',
  siteUrl: '',
  title: appConfig.title,
  description: appConfig.description,
  keywords: appConfig.keywords,
  lang: 'en',
  siteImage: `${appConfig.favIconPath}/og-image.jpg`,
  facebook: {
    appID: appConfig.facebookAppID,
  },
  browserConfig: `${appConfig.favIconPath}/browserconfig.xml`,
  manifest: `${appConfig.favIconPath}/site.webmanifest`,
  maskIcon: `${appConfig.favIconPath}/safari-pinned-tab.svg`,
  maskColor,
  shortcutIcon: `${appConfig.favIconPath}/favicon.ico`,
  twitter: {
    creator: twitterCreator,
    image: `${appConfig.favIconPath}/og-image.jpg`,
    imageAlt: twitterImageAlt,
    site: twitterCreator,
  },
  icons: {
    appleTouch: `${appConfig.favIconPath}/apple-touch-icon.png`,
    icon32: `${appConfig.favIconPath}/favicon-32x32.png`,
    icon16: `${appConfig.favIconPath}/favicon-16x16.png`,
  },
}

export default appHeaderTagConfig
