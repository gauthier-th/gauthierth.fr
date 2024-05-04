import '../styles/globals.css'
import { useRouter } from 'next/router'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }: any) {
  const { locale, defaultLocale } = useRouter()
  return <AnimateSharedLayout>
    <Component {...pageProps} locale={locale || defaultLocale || 'en'} />
  </AnimateSharedLayout>
}

export default MyApp
