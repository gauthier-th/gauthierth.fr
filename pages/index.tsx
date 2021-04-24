import Link from 'next/link'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Welcome on my website!" isIndex>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
