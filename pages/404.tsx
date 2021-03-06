import Link from 'next/link'
import Layout from '../components/Layout'
import { Translation, getTitle } from '../components/i18n'

const ErrorPage = ({ locale }: { locale: string }) => (
  <Layout {...getTitle(locale, '404')}>
    <p>
      <Translation locale={locale} translation='Error page description' />
    </p>
    <Link href="/">
      <a className="gradientButton">
        <Translation locale={locale} translation='Error page button' />
      </a>
    </Link>
  </Layout>
)

export default ErrorPage
