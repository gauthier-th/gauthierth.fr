import '../styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { LayoutGroup } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter()
  return <LayoutGroup>
    <Component {...pageProps} locale={locale || defaultLocale || 'en'} />
  </LayoutGroup>
}

export default MyApp
