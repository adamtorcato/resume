import { AppContext, footerVisibleAction } from 'state/context/appContext'

import Footer from './styled'
import React from 'react'
import { SiteIcons } from '@app/components/icons/SiteIcon'
// import SocialLinks from './socialLinks'
import { attachments } from '@app/models/attachments'
import { handlePrint, withAppPath } from 'utils'
import siteConfig from '@app/config'
// import { sitePaths } from '@app/models/paths'
import { useIntersection } from 'react-use'

const AppFooter = (): JSX.Element => {
  const intersectionRef = React.useRef(null)
  const { dispatch } = React.useContext(AppContext)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '500px',
    threshold: 1,
  })

  React.useEffect(() => {
    if (intersection) {
      dispatch(footerVisibleAction(intersection.intersectionRatio < 1 ? false : true))
    }
  }, [intersection, dispatch])

  // {intersection && intersection.intersectionRatio < 1 ? 'Obscured' : 'Fully in view'}
  return (
    <Footer.Container ref={intersectionRef}>
      <footer aria-labelledby="footer-heading" className="px-4 py-8 mx-auto print:hidden max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-flow-row grid-cols-1 lg:grid-flow-col lg:grid-cols-5 xl:gap-8">
          <div className="col-span-2 mt-8 space-y-4 xl:col-span-2 lg:mt-0">
            <img src={withAppPath('/img/richardtorcato.svg')} alt="Richard Torcato" className="mb-1 img-fluid" />
            <p>Senior Construction Project Manager</p>
            {/* <SocialLinks /> */}
          </div>
          <Footer.FooterBox className="col-span-5 mt-8 lg:col-span-1 lg:mt-0">
            <h3>Documents</h3>
            <ul>
              <li>
                <a href={attachments[0].href}>
                  <SiteIcons.FilePdf width={30} />
                  PDF Document
                </a>
              </li>
              <li>
                <a href={attachments[1].href}>
                  <SiteIcons.FileWord width={30} />
                  Word Document
                </a>
              </li>
              <li>
                <button onClick={handlePrint} className="btn-text">
                  <SiteIcons.Printer width={30} />
                  Print Resume
                </button>
              </li>
            </ul>
          </Footer.FooterBox>
          {/* <Footer.FooterBox className="col-span-5 mt-8 lg:col-span-1 lg:mt-0">
            <h3>Links</h3>
            <ul>
              <li>
                <a href={sitePaths.matrixportfolio} target="_blank" rel="noopener noreferrer">
                  Work Portfolio
                </a>
              </li>
              <li>
                <a href={sitePaths.matrixdigital} target="_blank" rel="noopener noreferrer">
                  www.matrixdigital.com
                </a>
              </li>
              <li>
                <a href={sitePaths.tripstreamer}>www.tripstreamer.com</a>
              </li>
            </ul>
          </Footer.FooterBox> */}
          <Footer.FooterBox className="col-span-5 mt-8 lg:col-span-1 lg:mt-0">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`tel:${siteConfig.phone}`}>Phone: {siteConfig.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>Email: {siteConfig.email}</a>
              </li>
            </ul>
          </Footer.FooterBox>
        </div>
        <div className="pt-8 mt-16 border-t border-gray-100 ">
          <div className="xl:text-center">
            <p className="mb-1">References available upon request</p>
            <p>Last updated - {siteConfig.lastUpdated}</p>
          </div>
        </div>
      </footer>
    </Footer.Container>
  )
}

export default AppFooter
