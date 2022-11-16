// import { APP_NAME } from '@app/config/constants'
// import { GetStaticProps } from 'next'
import { IPage } from '@app/ts/nextJS.types'
import MainLayout from '@app/components/AppLayout'
import NextHead from '@app/components/common/NextHead'
import ResumeScreen from '@app/appScreens/ResumeScreen'

interface IProps {
  name: string
}

const IndexPage: IPage<IProps> = () => {
  // const { authUser } = useAuth({ redirectTo: '/auth/login' })
  return (
    <>
      <NextHead>
        <title>Resume - Adam Torcato</title>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <ResumeScreen />
    </>
  )
}

IndexPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

// export const getStaticProps: GetStaticProps<IProps> = async (context) => {
// export const getStaticProps: GetStaticProps<IProps> = async () => {
//   // The name will be generated at build time only
//   const name = faker.name.findName()
//   return {
//     props: { name },
//   }
// }

export default IndexPage
