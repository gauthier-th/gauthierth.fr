import Layout from '../components/Layout'
import styles from '../styles/Projects.module.css'

type Project = {
  name: string,
  desc: string,
  href: string,
  image: string,
  backgroundPositionY?: string | number
}

const projects: Project[] = [
  {
    name: 'LordBot',
    desc: 'A multi-purpose Discord bot for moderation, fun stuff and with a web dashboard.',
    href: 'https://lordbot.net/',
    image: '/lordbot.png',
    backgroundPositionY: 'center'
  },
  {
    name: 'Conjugation-FR',
    desc: 'A Node.js module for fast conjugation of french verbs.\nThis package is based on the Verbiste database. It contains more than 7000 verbs.',
    href: 'https://github.com/gauthier-th/conjugation-fr',
    image: '/conjugation-fr.png',
    backgroundPositionY: -200
  },
  {
    name: 'Embed Visualizer',
    desc: 'A React Component to render Discord-like embeds.\nUsefull to preview an embed on a web dashboard.',
    href: 'https://github.com/gauthier-th/embed-visualizer',
    image: 'https://user-images.githubusercontent.com/37781713/101478922-ad721080-3951-11eb-8395-06dcd334cea3.png',
    backgroundPositionY: -65
  },
  {
    name: 'FunCraft API',
    desc: 'An API to retrieve statistics from the Minecraft server "FunCraft.net"!',
    href: 'https://github.com/gauthier-th/funcraft-api',
    image: '/funcraft-api.png'
  }
]

const ProjectsPage = () => (
  <Layout title="My awesome projects" pageTitle="My projects">
    <div className={styles.tiles}>
      {projects.map(({ name, desc, href, image, backgroundPositionY }, idx) => (
        <a key={idx} href={href} className={styles.tile} target="_blank">
          {image && <div className={styles.bgImage} style={{ backgroundImage: `url(${image})`, backgroundPositionY }} />}
          <div className={styles.content}>
            <h3>{name}</h3>
            <span>{desc}</span>
          </div>
        </a>
      ))}
    </div>
  </Layout>
)

export default ProjectsPage
