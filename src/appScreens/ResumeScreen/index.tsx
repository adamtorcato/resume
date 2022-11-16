import { AsideContainer, PrintHeader } from './Styled'

import Education from './components/education'
import Interests from './components/interests'
import Introduction from './components/introduction'
import React from 'react'
import Richard from '@app/components/adam'
import SectionRight from './components/SectionRight'
import Skills from './components/skills'
import WorkExperience from './components/workExperience'
import appConfig from '@app/config'
import { sitePaths } from '@app/models/paths'

// import { ISectionRefsObject } from 'ts/interfaces'
// import ScrollSpy from 'react-ui-scrollspy'
// const ScrollSpyWrapper: React.FC<IWithChildren> = ({ children }) => {
//   if (typeof window !== 'undefined') {
//     return (
//       <ScrollSpy activeClass="ss-active-demo-2" offsetBottom={100} scrollThrottle={80} useBoxMethod>
//         {children}
//       </ScrollSpy>
//     )
//   } else {
//     return <div>{children}</div>
//   }
// }

const ResumeScreen: React.FC = () => {
  const parentScrollContainerRef = React.useRef<HTMLDivElement | null>(null)
  return (
    <>
      <div className="pb-10 ">
        <PrintHeader className="mt-4 print-show">
          <Richard color="#161C2E" width="500px" />
          <ul className="mt-2 list-unstyled">
            <li>
              <a href={`tel:${appConfig.phone}`}>Phone: {appConfig.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${sitePaths.email}`}>Email: {sitePaths.email}</a>
            </li>
          </ul>
        </PrintHeader>
        {/* <ScrollSpyWrapper> */}
        {/* <div className="mt-4 printHeader print-show">
          <Richard color="#161C2E" width="500px" />
          <ul className="mt-2 list-unstyled">
            <li>
              <a href={`tel:${appConfig.phone}`}>Phone: {appConfig.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${sitePaths.email}`}>Email: {sitePaths.email}</a>
            </li>
          </ul>
        </div> */}
        <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3 ">
          <div ref={parentScrollContainerRef} className="space-y-6 lg:col-start-1 lg:col-span-2">
            <Introduction id="section-1" className="p-4 mb-5 bg-white shadow sm:rounded-lg" />
            <Skills id="section-2" className="p-4 mb-5 bg-white shadow sm:rounded-lg" />
            <div className="hidden print-break">&nbsp;</div>
            <WorkExperience id="section-3" className="p-4 mb-5 bg-white shadow sm:rounded-lg" />
            <div className="hidden print-break">&nbsp;</div>
            <Education id="section-4" className="p-4 mb-5 bg-white shadow sm:rounded-lg" />
            <Interests id="section-5" className="p-4 bg-white shadow sm:rounded-lg" />
          </div>
          <AsideContainer className="z-20 hidden min-w-0 md:block print:hidden">
            <SectionRight className="sticky lg:block print:hidden" style={{ top: '122px' }} />
          </AsideContainer>
        </div>
        {/* </ScrollSpyWrapper> */}
      </div>
    </>
  )
}

export default ResumeScreen
