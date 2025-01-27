import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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

    sidebar: [
      {

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/petry078/' }
    ]
  }
})
