import type { AppProps } from 'next/app'

import { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/bll/store'
import { WithNavigate } from '@/shared/assets/hok/WithNavigate'
import { client } from '@/shared/lib/apolloClient/ApolloClient'
import { ApolloProvider, gql } from '@apollo/client'
import { Roboto } from '@next/font/google'
import { NextPage } from 'next'

import '../styles/globals.css'
import '@/styles/index.scss'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export type NextPageWithLayout<P = {}> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <WithNavigate>
          <div className={roboto.className}>{getLayout(<Component {...pageProps} />)}</div>
        </WithNavigate>
      </ApolloProvider>
    </Provider>
  )
}
