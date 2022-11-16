import { AppContext, mobileMenuVisibleAction } from '@app/state/context/appContext'

import AppFooter from '../AppFooter'
import AppNavMobile from '../AppNavMobile'
import AppNavigation from '@app/components/AppNavigation'
import AppOverlay from '../appOverlay'
import { NextPage } from 'next'
import NoCookies from '@app/components/browser/no-cookies'
import PhotoBox from '@app/components/photoBox'
import React from 'react'
import ScrollToTopBtn from '../buttons/scrollToTopBtn'

// import siteConfig from '@app/config'
// import { showMobileMenu } from '@app/redux-state/appNavigation'
// import { useDispatch } from 'react-redux'
// import { useRouter } from 'next/router'
// import { contentLanguageMap } from '@app/utils/i18n'
interface Props {
  children: NextPage | React.ReactElement | React.ReactElement[]
}

const MainLayout = ({ children }: Props): React.ReactElement => {
  // const router = useRouter()
  // const dispatch = useDispatch()
  const { state, dispatch } = React.useContext(AppContext)
  const handleOverLayClick = (): void => {
    dispatch(mobileMenuVisibleAction(false))
  }
  // const handleNavSubClick = (e: React.MouseEvent | React.KeyboardEvent): void => {
  //   dispatch(navSubMenuVisibleAction(e.currentTarget.getAttribute('data-submenu-id')))
  // }
  // const handleNavSubOverLayClick = (): void => {
  //   dispatch(navSubMenuVisibleAction(null))
  // }
  const handleBurgerBtn = (): void => {
    dispatch(mobileMenuVisibleAction(!state.mobileMenuVisible))
  }
  // const handleNavSubClick = (e: React.MouseEvent | React.KeyboardEvent): void => {
  //   dispatch(navSubMenuVisibleAction(e.currentTarget.getAttribute('data-submenu-id')))
  // }
  // const handleNavSubOverLayClick = (): void => {
  //   dispatch(navSubMenuVisibleAction(null))
  // }
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     // eslint-disable-next-line no-console
  //     console.log('App is changing to: ', url)
  //     // dispatch(showMobileMenu(false))
  //   }
  //   router.events.on('routeChangeStart', handleRouteChange)
  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [router.events, dispatch])

  return (
    <React.Fragment>
      <div className="flex flex-col flex-1 font-sans antialiased bg-gray-200">
        <NoCookies className="print-hidden" />
        {/* <div className="flex items-center justify-center landscape:hidden1">
          <p>This experience is designed to be viewed in landscape. Please rotate your device to view the site.</p>
        </div> */}

        <AppNavigation onBurgerClick={handleBurgerBtn} mobileMenuVisible={state.mobileMenuVisible} />
        <main className="flex flex-col flex-1 scroll-smooth">{children}</main>
        <AppFooter />
      </div>
      <AppOverlay active={state.mobileMenuVisible} onClick={handleOverLayClick} />

      <ScrollToTopBtn />
      <AppNavMobile open={state.mobileMenuVisible} />
      <PhotoBox />
    </React.Fragment>
  )
}
export default MainLayout

// function handleExitComplete() {
//   if (typeof window !== 'undefined') {
//     window.scrollTo({ top: 0 })
//   }
// }

// import { AnimatePresence } from 'framer-motion'
// <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
//               {/* </AnimatePresence> */}
