import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '../context/context'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
  </ReduxProvider>
  )
}

export default MyApp
