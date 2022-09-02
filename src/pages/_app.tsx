import '../styles/global.scss'
import React from "react"
import { AppProps } from '../../node_modules/next/app'
import { Header } from '../components/Header/index'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}