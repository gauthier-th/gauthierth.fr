type i18nLang = {
  [key: string]: (...args: any[]) => JSX.Element
}

const i18n: { [key: string]: i18nLang } = {
  en: {
    'Footer made by': () => <>
      Made with{' '}
      <img src="https://twemoji.maxcdn.com/svg/2764.svg" alt="love" />
      {' '}by me.
    </>,
    'Error page description': () => <>
      Sorry, but I can't find the page you're looking for.
      <br />
      You should probably come back to homepage.
    </>,
    'Error page button': () => <>
      Home here!!
    </>,
    'Contact page description': () => <>
      If you want to get in touch with me for any reason, don't hesitate to contact me with one of the following:
    </>,
    'Contact page mail': () => <>
      Mail: <a href="mailto:mail@gauthierth.fr">mail@gauthierth.fr</a>
    </>,
    'Contact page discord': () => <>
      Discord: Gauthier#0875
    </>,
    'Contact page github': () => <>
      GitHub: <a href="https://github.com/gauthier-th">gauthier-th</a>
    </>,
    'Index page description': () => <>
      <p>
        As you might have guessed, my name is Gauthier.
      </p>
      <p>
        I'm a young French developer interested in programming various stuff, but mainly things on the web or with JavaScript.
      </p>
    </>
  },
  fr: {
    'Footer made by': () => <>
      Créé avec{' '}
      <img src="https://twemoji.maxcdn.com/svg/2764.svg" alt="amour" />
      {' '}par moi.
    </>,
    'Error page description': () => <>
      Désolé, mais je n'ai pas réussi à trouver cette page.
      <br />
      Vous devriez sûrement retourner à l'accueil
    </>,
    'Error page button': () => <>
      Par ici !!
    </>,
    'Contact page description': () => <>
      Si vous voulez rentrer en contact avec moi pour une quelconque raison, contactez-moi avec une de ces méthode :
    </>,
    'Contact page mail': () => <>
      Mail : <a href="mailto:mail@gauthierth.fr">mail@gauthierth.fr</a>
    </>,
    'Contact page discord': () => <>
      Discord : Gauthier#0875
    </>,
    'Contact page github': () => <>
      GitHub : <a href="https://github.com/gauthier-th">gauthier-th</a>
    </>,
    'Index page description': () => <>
      <p>
        Comme vous avez pu le deviner, je m'appelle Gauthier.
      </p>
      <p>
        Je suis un jeune développeur français programmant ci et ça, mais surtout des choses sur le web ou avec JavaScript.
      </p>
      <p>
        Allez donc jeter un &oelig;il à ce que je fais :
      </p>
    </>
  }
}

type TranslationProps = {
  locale: string,
  translation: string,
  params?: object
}

export const Translation = ({ locale, translation, params }: TranslationProps) => {
  const Element = i18n[locale][translation]
  return <Element {...params} />
}


type i18nTitles = {
  [key: string]: {
    title?: string,
    pageTitle?: string
  }
}

const titles: { [key: string]: i18nTitles } = {
  en: {
    '404': {
      title: 'Page not found',
      pageTitle: 'Page not found'
    },
    contact: {
      title: 'Contact me!',
      pageTitle: 'Contact me'
    },
    index: {
      title: 'Welcome on my website!'
    },
    projects: {
      title: 'My awesome projects',
      pageTitle: 'My projects'
    }
  },
  fr: {
    '404': {
      title: 'Page introuvable',
      pageTitle: 'Page introuvable'
    },
    contact: {
      title: 'Contactez moi !',
      pageTitle: 'Contactez moi'
    },
    index: {
      title: 'Bienvenue sur mon site !'
    },
    projects: {
      title: 'Mes superbes projets',
      pageTitle: 'Mes projets'
    }
  }
}

export const getTitle = (locale: string, page: string): { title?: string, pageTitle?: string, locale: string } => {
  return {
    ...titles[locale][page],
    locale
  }
}


const data: { [key: string]: any } = {
  en: {
    'Website title': 'Gauthier\'s website',
    'Footer link home': 'Home',
    'Footer link projects': 'My projects',
    'Footer link contact': 'Contact me',
    'Projects lordbot desc': 'A multi-purpose Discord bot for moderation, fun stuff and with a web dashboard.',
    'Projects conjugation-fr desc': 'A Node.js module for fast conjugation of french verbs.\nThis package is based on the Verbiste database. It contains more than 7000 verbs.',
    'Projects embed-visualizer desc': 'A React Component to render Discord-like embeds.\nUsefull to preview an embed on a web dashboard.',
    'Projects funcraft-api desc': 'An API to retrieve statistics from the Minecraft server "FunCraft.net"!',
    'Index github desc': 'Follow me on GitHub',
    'Index projects desc': 'Check my projects',
    'Index contact desc': 'How to contact me'
  },
  fr: {
    'Website title': 'Site de Gauthier',
    'Footer link home': 'Accueil',
    'Footer link projects': 'Mes projets',
    'Footer link contact': 'Contactez moi',
    'Projects lordbot desc': 'Un bot Discord multifonction pour de la modération, du diversissement et avec un panel web.',
    'Projects conjugation-fr desc': 'Un module Node.js pour faire de la conjugaison en français.\nLe module est basé sur la base de données Verbiste, contenant plus de 7000 verbes.',
    'Projects embed-visualizer desc': 'Un composant React pour afficher des embeds Discord.\nUtile pour prévisualiser un embed sur un panel web.',
    'Projects funcraft-api desc': 'Une api pour récupérer les statistiques du serveur Minecraft "FunCraft.net" !',
    'Index github desc': 'Suivez-moi sur GitHub',
    'Index projects desc': 'Consultez mes projets',
    'Index contact desc': 'Comment me contacter'
  }
}

export const getData = (locale: string, translation: string): any => {
  return data[locale][translation]
}


export default i18n