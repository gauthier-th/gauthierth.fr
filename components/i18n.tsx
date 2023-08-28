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
    'About page description': () => <>
      <h3>Hey!</h3>
      <p>My name is Gauthier, and I'm a student at ESIREM, an engineering school in Dijon (in France).</p>
      <p>I started programming with PHP several years ago, and since then I got to like JavaScript (Node.js, React, Express, ...) as well as all its uses to create projects mostly around the web, but sometimes I also use other tools like C ++ or Java.</p>
      <p>I like to create websites, to program small tools, but I also occasionally play games (Minecraft, LoL, CS-GO, ...). </p>
    </>,
    'About page links': () => <>
      Don't hesitate to contact me:
    </>,
    'About page mail': () => <>
      By email, classic: <a href="mailto:mail@gauthierth.fr">mail<span style={{ fontFamily: 'initial' }}>@</span>gauthierth.fr</a>
    </>,
    'About page discord': () => <>
      On Discord, more cool: Gauthier#0875 (or on <a href="https://discord.gg/vCjEufP" target="_blank">my server</a>)
    </>,
    'About page github': () => <>
      My GitHub, check my projects: <a href="https://github.com/gauthier-th">https://github.com/gauthier-th</a>
    </>,
    'Index page description': () => <>
      <p>
        As you surely remember (if you have been on the about me page), my name is Gauthier.
      </p>
      <p>
        I'm a young French developer interested in programming various stuff, but mainly things on the web or with JavaScript.
      </p>
      <p>
        You should definitely go take a look at what I'm doing: 
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
      Par ici!!
    </>,
    'About page description': () => <>
      <h3>Salut!</h3>
      <p>Mon nom c'est Gauthier, et je suis actuellement étudiant à l'ESIREM, une école d'ingénieur à Dijon.</p>
      <p>J'ai commencé la programmation avec PHP il y a plusieurs années déjà, et j'ai depuis appris à maîtriser et à apprécier le JavaScript (Node.js, React, Express, ...) ainsi que toutes ses utilisations pour créer des projets principalement autours du Web, mais cela ne m'empêche pas d'utiliser parfois d'autres outils comme le C++ ou Java.</p>
      <p>J'aime créer des sites, programmer des petits outils, mais aussi faire de temps en temps des jeux (Minecraft, LoL, CS-GO, ...).</p>
    </>,
    'About page links': () => <>
      N'hésitez pas à me contacter:
    </>,
    'About page mail': () => <>
      Par mail, classique: <a href="mailto:mail@gauthierth.fr">mail<span style={{ fontFamily: 'initial' }}>@</span>gauthierth.fr</a>
    </>,
    'About page discord': () => <>
      Sur Discord, plus cool: Gauthier#0875 (ou sur <a href="https://discord.gg/vCjEufP" target="_blank">mon serveur</a>)
    </>,
    'About page github': () => <>
      Mon GitHub, vérifie mes projets: <a href="https://github.com/gauthier-th">https://github.com/gauthier-th</a>
    </>,
    'Index page description': () => <>
      <p>
        Comme tu t'en souviens sûrement (si tu as été sur la page à propos de moi), je m'appelle Gauthier.
      </p>
      <p>
        Je suis un jeune développeur français programmant ci et ça, mais surtout des choses sur le web ou avec JavaScript.
      </p>
      <p>
        Vous devriez aller jeter un &oelig;il à ce que je fais:
      </p>
    </>
  },
  de: {
    'Footer made by': () => <>
      Geschaffen mit{' '}
      <img src="https://twemoji.maxcdn.com/svg/2764.svg" alt="love" />
      {' '}von mir.
    </>,
    'Error page description': () => <>
      Tut mir leid, aber ich kann die Seite, die du suchst, nicht finden.
      <br />
      Du solltest vielleicht wieder auf die Startseite kommen.
    </>,
    'Error page button': () => <>
      Home here!!
    </>,
    'About page description': () => <>
      <h3>Hey!</h3>
      <p>Mein Name ist Gauthier und ich bin Student an der ESIREM, einer Ingenieurschule in Dijon (Frankreich).</p>
      <p>Ich habe vor einigen Jahren mit PHP angefangen zu programmieren. Seitdem habe ich JavaScript (Node.js, React, Express, ...) und all seine Verwendungsmöglichkeiten kennengelernt, um Projekte zu erstellen, die sich hauptsächlich um das Web drehen, aber manchmal verwende ich auch andere Tools wie C++ oder Java.</p>
      <p>Ich erstelle gerne Webseiten, programmiere kleine Tools, aber ich spiele auch gelegentlich Spiele (Minecraft, LoL, CS-GO, ...). </p>
    </>,
    'About page links': () => <>
      Zögere nicht, mich zu kontaktieren:
    </>,
    'About page mail': () => <>
      Per E-Mail, klassisch: <a href="mailto:mail@gauthierth.fr">mail<span style={{ fontFamily: 'initial' }}>@</span>gauthierth.fr</a>
    </>,
    'About page discord': () => <>
      Auf Discord, mehr cool: Gauthier#0875 (oder über <a href="https://discord.gg/vCjEufP" target="_blank">meinem Server</a>)
    </>,
    'About page github': () => <>
      Mein GitHub, checke meine Projekte: <a href="https://github.com/gauthier-th">https://github.com/gauthier-th</a>
    </>,
    'Index page description': () => <>
      <p>
        Wie du sicher noch weißt (wenn du auf der Über-Mich-Seite warst), ist mein Name Gauthier.
      </p>
      <p>
        Ich bin ein junger französischer Entwickler, der sich für das Programmieren verschiedener Dinge interessiert, aber hauptsächlich für Dinge im Web oder mit JavaScript.
      </p>
      <p>
        Du solltest dir unbedingt ansehen, was ich mache: 
      </p>
    </>
  }
}

const titles: { [key: string]: i18nTitles } = {
  en: {
    '404': {
      title: 'Page not found',
      pageTitle: 'Page not found'
    },
    about: {
      title: 'About me!',
      pageTitle: 'About me'
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
    about: {
      title: 'À propos de moi',
      pageTitle: 'À propos de moi'
    },
    index: {
      title: 'Bienvenue sur mon site!'
    },
    projects: {
      title: 'Mes superbes projets',
      pageTitle: 'Mes projets'
    }
  },
  de: {
    '404': {
      title: 'Seite nicht gefunden',
      pageTitle: 'Seite nicht gefunden'
    },
    about: {
      title: 'Über mich!',
      pageTitle: 'Über mich'
    },
    index: {
      title: 'Willkommen auf meiner Website!'
    },
    projects: {
      title: 'Meine fantastischen Projekte',
      pageTitle: 'Meine Projekte'
    }
  }
}

const data: { [key: string]: any } = {
  en: {
    'Website title': 'Gauthier\'s website',
    'Footer link home': 'Home',
    'Footer link projects': 'My projects',
    'Footer link about': 'About me',
    'Projects lordbot desc': 'A multi-purpose Discord bot for moderation, fun stuff and with a web dashboard.',
    'Projects conjugation-fr desc': 'A Node.js module for fast conjugation of french verbs.\nThis package is based on the Verbiste database. It contains more than 7000 verbs.',
    'Projects embed-visualizer desc': 'A React Component to render Discord-like embeds.\nUsefull to preview an embed on a web dashboard.',
    'Projects funcraft-api desc': 'An API to retrieve statistics from the Minecraft server "FunCraft.net"!',
    'Index github desc': 'Follow me on GitHub',
    'Index projects desc': 'Check my projects',
    'Index about desc': 'Few infos about me'
  },
  fr: {
    'Website title': 'Site de Gauthier',
    'Footer link home': 'Accueil',
    'Footer link projects': 'Mes projets',
    'Footer link about': 'À propos',
    'Projects lordbot desc': 'Un bot Discord multifonction pour de la modération, du diversissement et avec un panel web.',
    'Projects conjugation-fr desc': 'Un module Node.js pour faire de la conjugaison en français.\nLe module est basé sur la base de données Verbiste, contenant plus de 7000 verbes.',
    'Projects embed-visualizer desc': 'Un composant React pour afficher des embeds Discord.\nUtile pour prévisualiser un embed sur un panel web.',
    'Projects funcraft-api desc': 'Une api pour récupérer les statistiques du serveur Minecraft "FunCraft.net"!',
    'Index github desc': 'Suivez-moi sur GitHub',
    'Index projects desc': 'Consultez mes projets',
    'Index about desc': 'Quelques infos sur moi'
  },
  de: {
    'Website title': 'Gauthier\'s website',
    'Footer link home': 'Startseite',
    'Footer link projects': 'Meine Projekte',
    'Footer link about': 'Über mich',
    'Projects lordbot desc': 'Ein vielseitiger Discord-Bot für Moderation, lustige Sachen und mit einem Web-Dashboard.',
    'Projects conjugation-fr desc': 'Ein Node.js-Modul zur schnellen Konjugation französischer Verben.\nDieses Paket basiert auf der Verbiste-Datenbank. Sie enthält mehr als 7000 Verben.',
    'Projects embed-visualizer desc': 'Eine React-Komponente zum Rendern von Discord-ähnlichen Einbettungen.\nNützlich für die Vorschau einer Einbettung auf einem Web-Dashboard.',
    'Projects funcraft-api desc': 'Eine API zum Abrufen von Statistiken vom Minecraft-Server "FunCraft.net"!',
    'Index github desc': 'Folge mir auf GitHub',
    'Index projects desc': 'Checke meine Projekte',
    'Index about desc': 'Ein paar Infos über mich'
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

export const getTitle = (locale: string, page: string): { title?: string, pageTitle?: string, locale: string } => {
  return {
    ...titles[locale][page],
    locale
  }
}

export const getData = (locale: string, translation: string): any => {
  return data[locale][translation]
}


export default i18n