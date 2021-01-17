import { AppProps } from 'next/app'
import '../styles/index.css'

import '../styles/_variables.scss'
import '../styles/_mixins.scss'
import '../styles/_style.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
