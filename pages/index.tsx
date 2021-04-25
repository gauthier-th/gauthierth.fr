import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { GitHub, Archive, Mail } from 'react-feather'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'

type Tile = {
  icon: ReactNode
  desc: string,
  href: string,
  blank?: boolean
}

const tiles: Tile[] = [
  {
    icon: <GitHub color="black" />,
    desc: "Follow me on GitHub",
    href: "https://github.com/gauthier-th",
    blank: true
  },
  {
    icon: <Archive color="black" />,
    desc: "Check my projects",
    href: "/projects"
  },
  {
    icon: <Mail color="black" />,
    desc: "How to contact me",
    href: "/contact"
  }
]

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

const IndexPage = () => {
  const [hoveredTile, setOveredTile] = useState<number|null>(null)
  return <Layout title="Welcome on my website!" isIndex>
    <div className={styles.description}>
      <h3>
        <p>
          As you might have guessed, my name is Gauthier.
        </p>
        <p>
          I'm a young French developer interested in programming various stuff, but mainly things on the web or with JavaScript.
        </p>
      </h3>
    </div>
    <div className={styles.tilesContainer}>
      <div className={styles.tiles} onMouseLeave={() => setOveredTile(null)}>
        <AnimateSharedLayout type="crossfade">
          {tiles.map((tile, idx) => (
            <>
              {tile.blank && <a href={tile.href} target="_blank" onMouseEnter={() => setOveredTile(idx)}>
                <TileContent {...tile} hoveredTile={hoveredTile === idx} />
              </a>}
              {!tile.blank && <Link href={tile.href}>
                <a onMouseEnter={() => setOveredTile(idx)}>
                  <TileContent {...tile} hoveredTile={hoveredTile === idx} />
                </a>
              </Link>}
            </>
          ))}
        </AnimateSharedLayout>
      </div>
    </div>
  </Layout>
}

export default IndexPage
