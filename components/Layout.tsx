import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion, Variants, Transition } from 'framer-motion'
import { GitHub, ChevronRight } from 'react-feather'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode
  pageTitle?: string,
  title?: string,
  isIndex?: boolean
}

const sealTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
}

const Layout = ({ children, pageTitle, title, isIndex }: Props) => {
  return <div className={styles.container}>
    <Head>
      <title>{pageTitle ? pageTitle.trim() + " | Gauthier's website" : "Gauthier's website"}</title>
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
          <a className={styles.githubButton} href="https://github.com/gauthier-th" target="_blank">
            <div>
              <GitHub color="white" />
              <span>GitHub</span>
            </div>
            <ChevronRight color="white" className={styles.chevronRight} />
          </a>
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
      <a href="https://github.com/gauthier-th" target="_blank">
        Made with{' '}
        <img src="https://twemoji.maxcdn.com/svg/2764.svg" alt="Seal Image" className={styles.heart} />
        {' '}by me.
      </a>
    </footer>
  </div>
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
  children?: ReactNode
}

const TitleTransition = ({ children }: TransitionProps) => (
  <motion.div
    initial="initial"
    animate="in"
    variants={titleVariants}
    transition={titleTransition}
  >
    {children}
  </motion.div>
)

export default Layout
