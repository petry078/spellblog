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
        navbar: [
            {
                text: 'Posts',
                link: '/',
            },
            {
                text: 'About',
                link: '/about.md',
            }
        ]
    }),
}