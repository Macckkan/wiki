const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ekstammen Wiki',

  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { charset: 'utf-8' }],
    ['link', { rel: 'icon', href: 'favicon.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: 'Ekstammen/wiki',
    docsDir: 'docs',
    editLink: true,
    editLinkText: 'Redigera Dokument',
    lastUpdated: true,
    lastUpdatedText: 'Senast uppdaterad',
    contributors: true,
    contributorsText: 'Uppdaterare',
    sidebarDepth: 2,
    danger: 'FARA',
    tip: 'TIPS',
    warning: 'VARNING',
    notFound: ['Sidan hittades inte'],
    backToHome: 'Ta mig tillbaka',
    logo: '/images/ekstammen_logo.png',
    navbar: [
      {
        text: 'Hem',
        link: '/',
      },
      {
        text: 'Lands',
        link: '/lands/',
      },
      {
        text: 'Towny',
        link: '/towny/',
      },
      {
        text: 'SMP',
        link: '/smp/',
      },
      {
        text: 'Hemsida',
        link: 'https://ekstammen.nu',
      },
      {
        text: 'Discord',
        link: 'http://discord.ekstammen.nu',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Hem',
          children: [
            '/',
            '/discord.md',
            '/bedrock.md',
            '/vote.md',
            '/ranker.md',
            '/tokens.md',
          ]
        },
        {
          text: 'Lands',
          children: [
            '/lands/',
            '/lands/företag.md',
            '/lands/casino.md',
            '/lands/playershop.md',
            '/lands/crates.md',
            '/lands/invånare.md',
            '/lands/städer.md',
            '/lands/ranker.md',
            '/lands/flyga.md',
            '/lands/önskebrunn.md',
            '/lands/fos.md',
          ]
        },
        {
          text: 'SMP',
          children: [
            '/smp/',
            '/smp/regler.md',
            '/smp/datapacks.md',
          ]
        },
        {
          text: 'Towny',
          children: [
            '/towny/',
            '/towny/regler.md',
            '/towny/spawn/',
            '/towny/ranker.md',
          ]
        },
        {
          text: 'Plugins',
          children: [
            '/plugins/towny.md',
            '/plugins/discord.md',
            '/plugins/chestshop.md',
            '/plugins/cmi.md',
            '/plugins/jobs.md',
            '/plugins/lwc.md',
            '/plugins/mobfarmmanager.md',
            '/plugins/playershopgui.md',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
