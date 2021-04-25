import Link from 'next/link'
import Layout from '../components/Layout'

const ErrorPage = () => (
  <Layout title="Page not found" pageTitle="Page not found">
    <p>
      Sorry, but I can't find the page you're looking for.
      <br />
      You should probably come back to homepage.
    </p>
    <Link href="/">
      <a className="gradientButton">
        Home here!!
      </a>
    </Link>
  </Layout>
)

export default ErrorPage
