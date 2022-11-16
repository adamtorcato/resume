import React, { ReactElement } from 'react'

import { ChevronRightIcon } from '@heroicons/react/solid'
import WebLink from '@app/components/WebLink'

const SideNav = (): ReactElement | null => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (window && window.document) {
      const target = window.document.getElementById(e.currentTarget.href.split('#')[1])
      if (target) {
        const headerOffset = 110
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition - headerOffset

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }
  return (
    <div>
      <h6 className="mb-4 text-base font-semibold text-gray-800">Jump to</h6>
      <ol className="py-2 list-none list-inside">
        <li className="flex items-center mb-2">
          <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
          <WebLink onClick={(e) => onPress(e)} href={'#section-1'} data-to-scrollspy-id="section-1">
            Introduction
          </WebLink>
        </li>
        <li className="flex items-center mb-2">
          <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
          <WebLink onClick={(e) => onPress(e)} href={'#section-2'} data-to-scrollspy-id="section-2">
            Skills
          </WebLink>
        </li>
        <li className="flex items-center mb-2">
          {/* <div className="flex flex-1 p-1 border border-transparent rounded-lg group hover:border-primary-hover"> */}
          <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-black" aria-hidden="true" />
          <WebLink onClick={(e) => onPress(e)} href={'#section-3'} data-to-scrollspy-id="section-3">
            Work Experience
          </WebLink>
          {/* </div> */}
        </li>
        <li className="flex items-center mb-2">
          <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
          <WebLink onClick={(e) => onPress(e)} href={'#section-4'} data-to-scrollspy-id="section-4">
            Education
          </WebLink>
        </li>
        <li className="flex items-center mb-2">
          <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
          <WebLink onClick={(e) => onPress(e)} href={'#section-5'} data-to-scrollspy-id="section-5">
            Interests
          </WebLink>
        </li>
      </ol>
    </div>
  )
}

export default SideNav
