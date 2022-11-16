import { FC, ReactElement, ReactNode } from 'react'

import type { AppProps } from 'next/app'
import { NextPage } from 'next'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

export type NextApp = FC<AppPropsWithLayout>

// eslint-disable-next-line @typescript-eslint/ban-types
export interface IPage<T = {}> extends FC<T> {
  getLayout?: (page: NextPage) => JSX.Element
}

export interface NextApiResponse {
  //not working
  cookie: string
  status: number
}
