import Layout from '../components/Layout'
import styles from '../styles/Projects.module.css'
import { getTitle, getData } from '../components/i18n'

type Project = {
  name: string,
  desc: string,
  href: string,
  image: string,
  backgroundPositionY?: string | number
}

const projects = (locale: string): Project[] => (
  [
    {
      name: 'LordBot',
      desc: getData(locale, 'Projects lordbot desc'),
      href: 'https://lordbot.net/',
      image: '/lordbot.png',
      backgroundPositionY: 'center'
    },
    {
      name: 'Conjugation-FR',
      desc: getData(locale, 'Projects conjugation-fr desc'),
      href: 'https://github.com/gauthier-th/conjugation-fr',
      image: '/conjugation-fr.png',
      backgroundPositionY: -200
    },
    {
      name: 'Embed Visualizer',
      desc: getData(locale, 'Projects embed-visualizer desc'),
      href: 'https://github.com/gauthier-th/embed-visualizer',
      image: 'https://user-images.githubusercontent.com/37781713/101478922-ad721080-3951-11eb-8395-06dcd334cea3.png',
      backgroundPositionY: -65
    },
    {
      name: 'FunCraft API',
      desc: getData(locale, 'Projects funcraft-api desc'),
      href: 'https://github.com/gauthier-th/funcraft-api',
      image: '/funcraft-api.png'
    }
  ]
)

const ProjectsPage = ({ locale }: { locale: string }) => (
  <Layout {...getTitle(locale, 'index')}>
    <div className={styles.tiles}>
      {projects(locale).map(({ name, desc, href, image, backgroundPositionY }, idx) => (
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
