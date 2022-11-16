import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import Link from 'next/link'

const NextLink: FC<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = (props) => {
  const { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default NextLink
