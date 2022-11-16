import '@app/styles/tailwind.css'
import '@app/styles/app.scss'

import AppHeaderTags from '@app/components/AppHeaderTags'
import { AppProvider } from '@app/state/context/appContext'
import BrowserCheck from '@app/components/browser/browserCheck'
import GlobalStyles from '@app/styles/GlobalStyles'
import { HelmetProvider } from 'react-helmet-async'
import { NextApp } from '@app/ts/nextJS.types'
import React from 'react'
import ViewForIE from '@app/components/browser/viewForIE'
import appHeaderTagConfig from '@app/config/appHeaderTagConfig'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App: NextApp = ({ Component, pageProps }: any) => {
  // Use the layout defined at the page level, if available

  React.useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = 'light'

    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = 'dark'

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  })

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  // Provider options are not required but can be useful in situations where
  // you have a short session maxAge time. Shown here with default values.

  return (
    <>
      {/* <DefaultSeo {...seoConfig} /> */}
      <HelmetProvider>
        <AppHeaderTags config={appHeaderTagConfig} />
        <GlobalStyles />
        <BrowserCheck ie={true}>
          <ViewForIE />
        </BrowserCheck>
        <BrowserCheck ie={false}>
          <AppProvider>
            <>{getLayout(<Component {...pageProps} />)}</>
          </AppProvider>
        </BrowserCheck>
      </HelmetProvider>
    </>
  )
}

export default App
