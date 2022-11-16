// import ErrorScreen from '@app/appScreens/Error'
import { IPage } from '@app/ts/nextJS.types'
import MainLayout from '@app/components/AppLayout'
import NextHead from '@app/components/common/NextHead'
import React from 'react'

const ErrorPage: IPage = () => {
  return (
    <>
      <NextHead>
        <title>Oops!</title>
      </NextHead>
      <div>oops!</div>
      {/* <ErrorScreen /> */}
    </>
  )
}
ErrorPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ErrorPage
