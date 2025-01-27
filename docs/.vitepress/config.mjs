import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/spellblog/',
  title: "✨ Spellblog",
  description: "Documentations, writings, spells and other stuff",
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Spells', link: '/' },
      { text: 'Tarot', link: '/tarot' },
      { text: 'About', link: '/about' },
      { text: 'To-do', link: '/todo' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      {

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/petry078/' }
    ]
  }
})
