const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/img/FI_Logotyp_RGB-03.svg',
    logoLink: 'https://forenadeinkop.se',
    title: 'En handbok för matkooperativ',
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [
      { text: 'FORUM', link: 'https://foodshift.se/c/forenade-inkop/32' },
      {
        text: 'VIDEO',
        link: 'https://www.youtube.com/playlist?list=PLO7AcO89Czf6ErbDmOYtGfVI1ELgFwvTP',
      },
      { text: 'BLOGG', link: 'https://forenadeinkop.se/blogg' },
      { text: 'KARTA', link: 'https://forenadeinkop.se/karta' },
    ],

    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/Historik-kooperation',
      '/Syfte-och-former',
      '/Olika-sorters-matkooperativ',
      '/Finansiering',
      '/Stadgar',
      '/Styrelse',
      '/Demokrati-och-beslut',
      '/Medlemmar',
      '/Engagemang-och-drivkrafter',
      '/Arbetsgrupper',
      '/Butik-gemensam-lokal',
      '/Sortiment-lagerhallning',
      '/Prissattning-lonsamhet',
      '/Leverantor-producent',
      '/Hur-handlar-man',
      '/Livsmedelssakerhet',
      '/Extern-kommunikation',
      '/Intern-kommunikation',
      '/IT-stod-verktyg',
      '/Ekonomi-och-redovisning',
      '/Om-Food-Shift',
    ],
    collapsedNav: [],
    links: [],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: '/img/FI_Logotyp_RGB-03.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
