import React, { ReactElement, useEffect } from 'react'

import { ArrowUpCircle } from '@styled-icons/feather'
import SiteIcon from 'components/icons/SiteIcon'
import { css } from '@emotion/react'
import debounce from 'lodash.debounce'

// import { animateScroll as scroll } from 'react-scroll';

const style = css`
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  @media (min-height: 620px) {
    display: block;
  }
`

const pageYOffset = 300

const ScrollToTopBtn = (): ReactElement | null => {
  const [isVisible, setIsVisible] = React.useState(false)

  useEffect(() => {
    const eventName = 'scroll'
    // Create event listener that calls handler function stored in ref
    const eventListener = debounce((): void => {
      setIsVisible(window.pageYOffset > pageYOffset)
    })
    document.addEventListener(eventName, eventListener, { passive: true })
    // on cleanup
    return (): void => {
      document.removeEventListener(eventName, eventListener)
    }
  }, [])
  const scrollToTop = (): void => {
    window.scroll(0, 0)
  }
  if (!isVisible) {
    return null
  }

  return (
    <div id="ScrollToTopBtn" css={style} className="px-2 py-2 bg-white border-gray-500 border-solid rounded-md shadow ScrollToTopBtn print:hidden sm:rounded-sn sm:px-2">
      <button className="btn lift" onClick={scrollToTop}>
        <SiteIcon Icon={ArrowUpCircle} width={30} height={30} title="Scroll To Top" />
      </button>
    </div>
  )
}

export default ScrollToTopBtn
