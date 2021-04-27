import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion, Variants, Transition } from 'framer-motion'
import { GitHub, ChevronRight } from 'react-feather'
import styles from '../styles/Layout.module.css'
import { Translation, getData } from '../components/i18n'
import LangButton from './LangButton'

type Props = {
  children?: ReactNode
  pageTitle?: string,
  title?: string,
  isIndex?: boolean,
  locale: string
}

const Layout = ({ children, pageTitle, title, isIndex, locale }: Props) => {
  return <div className={styles.container}>
    <Head>
      <title>{pageTitle ? pageTitle.trim() + " | " + getData(locale, 'Website title') : getData(locale, 'Website title')}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.gradient} />
      </header>
      <div className='container'>
        <div className={styles.topbar}>
          <div>
            <Link href="/">
              <a className={styles.gauthierth}>
                {!isIndex && <motion.img src="/seal.jpg" layoutId="seal-img" transition={sealTransition} />}
                <motion.h2 layoutId="topbar-title">gauthier-th</motion.h2>
              </a>
            </Link>
          </div>
          <div className={styles.buttonsContainer}>
            <a className={styles.githubButton} href="https://github.com/gauthier-th" target="_blank">
              <div>
                <GitHub color="white" />
                <span>GitHub</span>
              </div>
              <ChevronRight color="white" className={styles.chevronRight} />
            </a>
            <LangButton />
          </div>
        </div>
        <div className={styles.title}>
          <TitleTransition key={title}>
            <h1>{title}</h1>
          </TitleTransition>
          {isIndex && <motion.img src="/seal.jpg" layoutId="seal-img" transition={sealTransition} />}
        </div>
        {children}
      </div>
    </div>
    <footer className={styles.footer}>
      <motion.div layoutId="footer-made" transition={sealTransition}>
        <a href="https://github.com/gauthier-th" target="_blank">
          <Translation locale={locale} translation='Footer made by' />
        </a>
      </motion.div>
      {!isIndex && <TitleTransition initial={{ opacity: 0, translateY: "30px", scale: 0.8 }}>
        <div className={styles.links}>
          <Link href="/">
            <a>
              {getData(locale, 'Footer link home')}
            </a>
          </Link>
          <Link href="/projects">
            <a>
              {getData(locale, 'Footer link projects')}
            </a>
          </Link>
          <Link href="/contact">
            <a>
              {getData(locale, 'Footer link contact')}
            </a>
          </Link>
        </div>
      </TitleTransition>}
    </footer>
  </div>
}

const sealTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
}

const titleVariants: Variants = {
  initial: {
    opacity: 0,
    translateY: "50px",
    scale: 0.8
  },
  in: {
    opacity: 1,
    translateY: "0px",
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
}
const titleTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3
}

type TransitionProps = {
  children?: ReactNode,
  initial?: string | object
}

const TitleTransition = ({ children, initial }: TransitionProps) => (
  <motion.div
    initial={initial || "initial"}
    animate="in"
    variants={titleVariants}
    transition={titleTransition}
  >
    {children}
  </motion.div>
)

export default Layout
