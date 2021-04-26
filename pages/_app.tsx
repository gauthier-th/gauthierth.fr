import '../styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  return <AnimateSharedLayout>
    <Component {...pageProps} locale={locale} />
  </AnimateSharedLayout>
}

export default MyApp
