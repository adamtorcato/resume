import { IPage } from '@app/ts/nextJS.types'
import MainLayout from '@app/components/AppLayout'
import NextHead from '@app/components/common/NextHead'
import React from 'react'
// import ServerErrorScreen from '@app/appScreens/ServerError'

const ServerErrorPage: IPage = () => {
  return (
    <>
      <NextHead>
        <title>Oops!</title>
      </NextHead>
      <div>oops an error happened</div>
      {/* <ServerErrorScreen /> */}
    </>
  )
}
ServerErrorPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ServerErrorPage
