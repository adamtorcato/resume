import React, { CSSProperties, ReactElement } from 'react'

import Link from 'next/link'
import { SiteIcons } from '@app/components/icons/SiteIcon'

interface IProps {
  text?: string
  className?: string
  style?: CSSProperties | undefined
}

export default function index({ text = 'Home', className = '', style = {} }: IProps): ReactElement {
  return (
    <Link href="/">
      <a className={`btn btn-primary  mt-3 ${className}`} style={style}>
        <SiteIcons.Home size="25" />
        <span style={{ paddingLeft: '10px', paddingTop: '7px' }}>{text}</span>
      </a>
    </Link>
  )
}
