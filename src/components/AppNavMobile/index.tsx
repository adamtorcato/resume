import React, { FC } from 'react'
import SideNav from '@app/components/SideNav'
import Styled from './styled'
import { classNames } from '@app/utils'
import SideNavLinks from '@app/components/SideNav/SideNavLinks'

interface IProps {
  open: boolean
}

const AppNavMobile: FC<IProps> = ({ open }) => (
  <div css={Styled.navMobile} className={classNames(open && 'active')}>
    <SideNav />
    <div className="block lg:hidden">
      <SideNavLinks />
    </div>
  </div>
)

export default AppNavMobile
