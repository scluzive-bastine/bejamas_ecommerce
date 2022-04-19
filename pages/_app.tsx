import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '../context/context'
import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider } from "next-auth/react"

import store from '../store'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
          <Provider>
            <Component {...pageProps} />
          </Provider>
      </ReduxProvider>
    </SessionProvider>
  )
}

export default MyApp
