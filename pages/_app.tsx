import type { AppProps } from 'next/app'

import { Roboto } from '@next/font/google'

import '../styles/globals.css'
import '@/styles/index.scss'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}
