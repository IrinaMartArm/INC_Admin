import { NextPageWithLayout } from '@/pages/_app'
import { getLayout } from '@/shared/components/layout/baseLayout/BaseLayout'
import { Loader } from '@/shared/components/loader'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <main>
        <Loader />
      </main>
    </>
  )
}

Home.getLayout = getLayout
export default Home
