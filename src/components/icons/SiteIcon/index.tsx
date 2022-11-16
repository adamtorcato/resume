import { Codepen, Github, Instagram, LinkedinSquare, StackOverflow, Twitter } from '@styled-icons/boxicons-logos'
import { FilePdf, FileWord, Home } from '@styled-icons/icomoon'
import { PhoneCall, Printer } from '@styled-icons/feather'
import React, { ReactElement } from 'react'

import { Documents } from '@styled-icons/entypo'
import { ExternalLink } from '@styled-icons/evil'
import { StyledIcon } from '@styled-icons/styled-icon'
import { colors } from '@app/config/appStyles'

interface IProps {
  size?: number
  color?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: StyledIcon
  width?: number
  height?: number
  title: string
  strokeWidth?: number
}

export const SiteIcon = (props: IProps): ReactElement => {
  const { width, height, size = 40, color = colors.primary.DEFAULT, Icon, strokeWidth = 1 } = props
  if (width && height) {
    return <Icon width={width} height={height} title={props.title} color={color} />
  } else {
    return <Icon size={size} color={color} title={props.title} strokeWidth={strokeWidth} />
  }
}

export const SiteIcons = {
  FilePdf,
  FileWord,
  Printer,
  Documents,
  Github,
  Twitter,
  Instagram,
  Codepen,
  LinkedinSquare,
  PhoneCall,
  StackOverflow,
  ExternalLink,
  Home,
}

export default SiteIcon
