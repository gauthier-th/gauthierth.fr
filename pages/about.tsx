import Layout from '../components/Layout'
import styles from '../styles/About.module.css'
import { Translation, getTitle } from '../components/i18n'

const AboutPage = ({ locale }: { locale: string }) => (
  <Layout {...getTitle(locale, 'about')}>
    <div className={styles.about}>
      <div className={styles.aboutMe}>
        <Translation locale={locale} translation='About page description' />
      </div>
      <h3 className={styles.contactTitle}>
        <Translation locale={locale} translation='About page links' />
      </h3>
      <div className={styles.links}>
        <div className={styles.link}>
          <div>
            <Translation locale={locale} translation='About page mail' />
          </div>
        </div>
        <div className={styles.link}>
          <div>
            <Translation locale={locale} translation='About page discord' />
          </div>
        </div>
        <div className={styles.link}>
          <div>
            <Translation locale={locale} translation='About page github' />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
