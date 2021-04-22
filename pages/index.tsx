import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { GitHub, ChevronRight } from 'react-feather'
import styles from '../styles/index.module.css'
import layoutStyles from '../styles/Layout.module.css'
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
