import React, { ReactElement } from 'react'

import Head from 'next/head'

interface Props {
  children: ReactElement | ReactElement[]
}

export const NextHead = ({ children }: Props): JSX.Element => {
  return <Head>{children}</Head>
}

export default NextHead
