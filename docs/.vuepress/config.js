const { defaultTheme } = require("vuepress");
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    base: "/spellblog/",
    title: "✨ Spellblog",
    plugins: [
        searchPlugin({
            // searchPlugin options
        }),
      ],
    theme: defaultTheme({
        colorModeSwitch: false,
        colorMode: 'dark',
        navbar: [
            {
                text: 'Spells',
                link: '/',
            },
            {
                text: 'Tarot',
                link: '/tarot.md',
            },
            {
                text: 'About',
                link: '/about.md',
            },
            {
                text: 'To-do',
                link: '/todo.md',
            },
        ],
    }),
}
