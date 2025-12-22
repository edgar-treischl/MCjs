import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MCjs',
  description: 'Modular Chart Library',
  base: '/MCjs/',  // <--- Add this line for GitHub Pages project site
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'BarChart', link: '/bar-chart' },
      { text: 'LineChart', link: '/line-chart' }
    ],
    sidebar: [
      { text: 'Introduction', link: '/' },
      { text: 'BarChart', link: '/bar-chart' },
      { text: 'LineChart', link: '/line-chart' }
    ]
  }
})
