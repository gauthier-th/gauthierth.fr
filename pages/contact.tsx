import { Mail } from 'react-feather'
import Layout from '../components/Layout'
import styles from '../styles/contact.module.css'

const ContactPage = () => (
  <Layout title="Contact me!" pageTitle="Contact me">
    <p>If you want to get in touch with me for any reason, don't hesitate to contact me with one of the following:</p>
    <div className={styles.links}>
      <div className={styles.link}>
        <Mail />
        <div>
          Mail: <a href="mailto:mail@gauthierth.fr">mail@gauthierth.fr</a>
        </div>
      </div>
      <div className={styles.link}>
        <img src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg" style={{ maxWidth: 30, margin: 0 }} />
        <div>
          Discord: Gauthier#0875
        </div>
      </div>
      <div className={styles.link}>
        <img src="/github.svg" />
        <div>
          GitHub: <a href="https://github.com/gauthier-th">gauthier-th</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
