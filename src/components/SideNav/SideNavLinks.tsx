import { FC } from 'react'
import { attachments } from '@app/models/attachments'
import { handlePrint } from '@app/utils'
import WebLink from '@app/components/WebLink'
import GhostButton from '@app/components/buttons/GhostButton'
import { PaperClipIcon } from '@heroicons/react/solid'
import { PrinterIcon, ExternalLinkIcon, PhotographIcon } from '@heroicons/react/outline'

const SideNavLinks: FC = () => {
  return (
    <>
      <div className="mb-5 text-sm text-gray-900 bg-white shadow sm:rounded-lg">
        <ul className="border border-gray-200 divide-y divide-gray-200 rounded-md ">
          {attachments.map((attachment) => (
            <li key={attachment.name} className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <WebLink href={attachment.href}>
                <div className="flex items-center flex-1 w-0 px-6">
                  <PaperClipIcon className="flex-shrink-0 w-5 h-5 " aria-hidden="true" />
                  <span className="flex-1 w-0 ml-2">{attachment.name}</span>
                </div>
              </WebLink>
            </li>
          ))}
        </ul>
      </div>
      <ul className="my-5">
        <li>
          <a href="https://www.matrixdigital.com/portfolio">
            <GhostButton className="flex justify-center w-full px-1">
              <PhotographIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              View Work Portfolio
            </GhostButton>
          </a>
        </li>
        <li className="my-3">
          <GhostButton className="flex justify-center w-full px-1" onClick={handlePrint}>
            <PrinterIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Print Resume
          </GhostButton>
        </li>
        <a href="https://www.matrixdigital.com">
          <GhostButton className="flex justify-center w-full px-1">
            <ExternalLinkIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Visit Matrix Digital Solutions
          </GhostButton>
        </a>
      </ul>
    </>
  )
}

export default SideNavLinks
