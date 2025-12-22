import { defineConfig } from 'vitepress'
import path from 'path'

export default defineConfig({
  title: 'MCjs',
  description: 'Modular Chart Library',
  base: '/MCjs/',  // Required for GitHub Pages
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
        // Alias for your chart library root
        '@mcjs': path.resolve(__dirname, '../../../') 
        // Adjust ../../../ depending on where your .vitepress folder is
      }
    }
  }
})
