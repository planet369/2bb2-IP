import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/2bb2-IP/',
  title: '2bb2 IP Documentation',
  description: 'Intellectual Property Documentation for the 2bb2 Marketplace Platform',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Features', link: '/features/client-app' },
      { text: 'Architecture', link: '/architecture/overview' },
      { text: 'Routes', link: '/routes/all-routes' },
      { text: 'Pricing', link: '/pricing/valuation' },
      { text: 'Demo Day', link: '/demo-day/feb17' },
    ],
    sidebar: [
      {
        text: 'Platform Overview',
        items: [
          { text: 'Introduction', link: '/' },
        ],
      },
      {
        text: 'Frontend Applications',
        collapsed: false,
        items: [
          { text: 'Client App', link: '/features/client-app' },
          { text: 'Merchant App', link: '/features/merchant-app' },
          { text: 'Driver App', link: '/features/driver-app' },
          { text: 'Admin Portal', link: '/features/admin-portal' },
          { text: 'Menu App', link: '/features/menu-app' },
        ],
      },
      {
        text: 'Architecture',
        collapsed: false,
        items: [
          { text: 'System Overview', link: '/architecture/overview' },
          { text: 'Backend Services', link: '/architecture/backend' },
          { text: 'Blockchain / Hedera', link: '/architecture/blockchain' },
          { text: 'Database', link: '/architecture/database' },
        ],
      },
      {
        text: 'Routes & Endpoints',
        collapsed: false,
        items: [
          { text: 'All Routes', link: '/routes/all-routes' },
        ],
      },
      {
        text: 'IP Valuation',
        collapsed: false,
        items: [
          { text: 'Technical Valuation', link: '/pricing/valuation' },
        ],
      },
      {
        text: 'Deployment',
        items: [
          { text: 'Status', link: '/deployment/status' },
        ],
      },
      {
        text: 'Demo Day',
        items: [
          { text: 'Feb 17 Agenda', link: '/demo-day/feb17' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/2bb2' },
    ],
    footer: {
      message: '2bb2 Intellectual Property Documentation',
      copyright: 'Copyright 2024-2026 2bb2. All rights reserved.',
    },
    search: {
      provider: 'local',
    },
  },
})
