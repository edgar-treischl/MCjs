import { defineConfig } from 'vitepress'
import path from 'path'

export default defineConfig({
  title: 'MCjs',
  description: 'Modular Chart Library',
  base: '/MCjs/',

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
  },

  vite: {
    resolve: {
      alias: {
        // Public API only
        mcjs: path.resolve(__dirname, '../../src/index.js')
      }
    }
  }
})
