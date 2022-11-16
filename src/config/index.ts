import getYear from 'date-fns/getYear'

const year = getYear(new Date())
const favIconPath = '/fav'
const title = 'Adam Torcato - Resume'
const titleShort = 'A. Torcato'
const url = 'https://adamtorcato.github.io/resume/'
const description = 'Fullstack Application Developer'
const facebookAppID = '' // '1825356251115265', // FB Application ID for using app insights
const googleAnalyticsID = 'UA-162702286-1' // 'UA-47311644-5', // GA tracking ID.
const keywords = ['Project Manager', 'Resume', 'construction', 'senior project manager', 'installer', 'installation', 'aluminum windows']
const author = 'atorcato@icloud.com'
const email = 'atorcato@icloud.com'
const copyright = `Copyright &copy; ${year}. Adam Torcato`
const postDefaultCategoryID = 'Tech' // Default category for posts.
const dateFromFormat = 'YYYY-MM-DD' // Date format used in the frontmatter.
const dateFormat = 'DD/MM/YYYY' // Date format for display.
const postsPerPage = 4 // Amount of posts displayed per listing page.
const lastUpdated = 'Nov 1, 2022'
const phone = '17824140399'
const phoneDisplay = '1 (782) 414-0399'
const themeColor = '#ffffff'
const maskColor = '#5bbad5'
const twitterCreator = '@atorcato'
const twitterImageAlt = 'Adam Torcato'

const zIndex = {
  mainNav: 1050,
  mobileMenu: 1049,
  appOverlay: 1001,
  navBarOverlay: 1002,
  navSubMenuItem: 1003,
}

const appConfig = {
  BASEPATH: process.env.NODE_ENV === 'production' ? '/resume' : '',
  title,
  titleShort,
  url,
  favIconPath,
  description,
  googleAnalyticsID,
  facebookAppID,
  keywords,
  copyright,
  author,
  postDefaultCategoryID,
  dateFromFormat,
  dateFormat,
  postsPerPage,
  lastUpdated,
  phone,
  phoneDisplay,
  zIndex,
  email,
}

export const metaTagData = {
  themeColor,
  favIconPath,
  siteFBAppID: '',
  siteUrl: '',
  title: title,
  description: description,
  keywords: keywords,
  lang: 'en',
  siteImage: `${favIconPath}/og-image.jpg`,
  facebook: {
    appID: facebookAppID,
  },
  browserConfig: `${favIconPath}/browserconfig.xml`,
  manifest: `${favIconPath}/site.webmanifest`,
  maskIcon: `${favIconPath}/safari-pinned-tab.svg`,
  maskColor,
  shortcutIcon: `${favIconPath}/favicon.ico`,
  twitter: {
    creator: twitterCreator,
    image: `${favIconPath}/og-image.jpg`,
    imageAlt: twitterImageAlt,
    site: twitterCreator,
  },
  icons: {
    appleTouch: `${favIconPath}/apple-touch-icon.png`,
    icon32: `${favIconPath}/favicon-32x32.png`,
    icon16: `${favIconPath}/favicon-16x16.png`,
  },
}

export default appConfig
