import React from 'react'
import { SiteIcons } from '@app/components/icons/SiteIcon'
import { socialPaths } from '@app/models/paths'

const SocialLinks = (): React.ReactElement => {
  return (
    <ul className="flex flex-row list-none ">
      <li className="mr-1">
        <a href={socialPaths.github} target="_blank" rel="noopener noreferrer">
          <SiteIcons.Github width={30} title="GitHub" />
        </a>
      </li>
      <li className="mr-1">
        <a href={socialPaths.stackoverflow} target="_blank" rel="noopener noreferrer">
          <SiteIcons.StackOverflow width={30} title="StackOverflow" />
        </a>
      </li>
      <li className="mr-1">
        <a href={socialPaths.codeSandBox} target="_blank" rel="noopener noreferrer">
          <SiteIcons.Codepen width={30} title="CodeSandbox" />
        </a>
      </li>
      <li className="mr-1">
        <a href={socialPaths.instagram} target="_blank" rel="noopener noreferrer">
          <SiteIcons.Instagram width={30} title="Instagram" />
        </a>
      </li>
      {/* <li >
        <a href={socialPaths.twitter} target="_blank" rel="noopener noreferrer">
          <SiteIcons.Twitter width={30} title="Twitter" />
        </a>
      </li> */}
    </ul>
  )
}

export default SocialLinks
