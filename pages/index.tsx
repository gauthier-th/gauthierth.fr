import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { motion, LayoutGroup, AnimatePresence } from "framer-motion"
import { GitHub, Archive, FileText } from 'react-feather'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'
import { Translation, getTitle, getData } from '../components/i18n'

type Tile = {
  icon: ReactNode
  desc: string,
  href: string,
  blank?: boolean
}

const tiles = (locale: string): Tile[] => (
  [
    {
      icon: <GitHub color="black" />,
      desc: getData(locale, 'Index github desc'),
      href: "https://github.com/gauthier-th",
      blank: true
    },
    {
      icon: <Archive color="black" />,
      desc: getData(locale, 'Index projects desc'),
      href: "/projects"
    },
    {
      icon: <FileText color="black" />,
      desc: getData(locale, 'Index about desc'),
      href: "/about"
    }
  ]
)

const TileContent = (props: { icon: ReactNode, desc: string, hoveredTile: boolean }) => {
  const { icon, desc, hoveredTile } = props
  return <div>
    <div className={styles.tile}>
      {icon}
      <span>
        {desc}
      </span>
    </div>
    <AnimatePresence>
      {hoveredTile && (
        <motion.div
          className={styles.tileHovered}
          layoutId="tile-hovered"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  </div>
}

const IndexPage = ({ locale }: { locale: string }) => {
  const [hoveredTile, setOveredTile] = useState<number|null>(null)
  return (
    <Layout {...getTitle(locale, 'index')} isIndex>
      <div className={styles.description}>
        <h3>
          <Translation locale={locale} translation='Index page description' />
        </h3>
      </div>
      <div className={styles.tilesContainer}>
        <div className={styles.tiles} onMouseLeave={() => setOveredTile(null)}>
          <LayoutGroup type="crossfade">
            {tiles(locale).map((tile, idx) => {
              if (tile.blank) {
                return <a key={idx} href={tile.href} target="_blank" onMouseEnter={() => setOveredTile(idx)}>
                  <TileContent {...tile} hoveredTile={hoveredTile === idx} />
                </a>
              }
              else {
                return (
                  <Link key={idx} href={tile.href} onMouseEnter={() => setOveredTile(idx)}>
                    <TileContent {...tile} hoveredTile={hoveredTile === idx} />
                  </Link>
                );
              }
            })}
          </LayoutGroup>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage
