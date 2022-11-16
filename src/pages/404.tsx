// import ErrorNotFoundScreen from '@app/appScreens/NotFound'
import { IPage } from '@app/ts/nextJS.types'
import MainLayout from '@app/components/AppLayout'
import NextHead from '@app/components/common/NextHead'
import React from 'react'

const ErrorPage: IPage = () => {
  return (
    <>
      <NextHead>
        <title>Error: Page not found</title>
      </NextHead>
      <div>Page not found</div>
      <div className="hidden1">{process.env.NODE_ENV === 'production' + ''}</div>
      {/* <div className="hidden1">{process.env.BASE_PATH + ' ' + (process.env.NODE_ENV === 'production')}</div> */}
      {/* <ErrorNotFoundScreen /> */}
    </>
  )
}
ErrorPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ErrorPage
