import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { GitHub, ChevronRight } from 'react-feather'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode
  pageTitle?: string,
  title?: string,
  isIndex?: boolean
}

const Layout = ({ children, pageTitle, title, isIndex }: Props) => (
  <div>
    <Head>
      <title>{pageTitle ? pageTitle.trim() + " | Gauthier's website" : "Gauthier's website"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
      <div className={styles.gradient} />
    </header>
    <div className='container'>
      <div className={styles.topbar}>
        <div>
          <Link href="/">
            <a className={styles.gauthierth}>
              {!isIndex && <motion.img src="/seal.jpg" layoutId="seal-img" />}
              <motion.h2 layoutId="topbar-title">gauthier-th</motion.h2>
            </a>
          </Link>
        </div>
        <a className={styles.githubButton} href="https://github.com/gauthier-th" target="_blank">
          <div>
            <GitHub color="white" />
            <span>GitHub</span>
          </div>
          <ChevronRight color="white" />
        </a>
      </div>
      <div className={styles.title}>
        <div>
          <h1>{title}</h1>
        </div>
        {isIndex && <motion.img src="/seal.jpg" layoutId="seal-img" />}
      </div>
      {children}
    </div>
  </div>
)

export default Layout
