import { Mail } from 'react-feather'
import Layout from '../components/Layout'
import styles from '../styles/contact.module.css'
import { Translation, getTitle } from '../components/i18n'

const ContactPage = ({ locale }: { locale: string }) => (
  <Layout {...getTitle(locale, 'contact')}>
    <p>
      <Translation locale={locale} translation='Contact page description' />
    </p>
    <div className={styles.links}>
      <div className={styles.link}>
        <Mail />
        <div>
          <Translation locale={locale} translation='Contact page mail' />
        </div>
      </div>
      <div className={styles.link}>
        <img src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg" style={{ maxWidth: 30, margin: 0 }} />
        <div>
          <Translation locale={locale} translation='Contact page discord' />
        </div>
      </div>
      <div className={styles.link}>
        <img src="/github.svg" />
        <div>
          <Translation locale={locale} translation='Contact page github' />
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
