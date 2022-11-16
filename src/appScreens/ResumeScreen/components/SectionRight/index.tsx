import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import SideNavLinks from '@app/components/SideNav/SideNavLinks'
import SideNav from '@app/components/SideNav'

const SectionRight: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <div className="py-5 mb-5 bg-white shadow sm:rounded-lg sm:px-6">
        <SideNav />
      </div>
      <SideNavLinks />
    </div>
  )
}

export default SectionRight
