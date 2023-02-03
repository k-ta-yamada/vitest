import { version } from '../../package.json'
import { contributing, releases } from './meta'

export default {
  ja: {
    label: '日本語',
    lang: 'ja',

    themeConfig: {

      editLink: {
        pattern: 'https://github.com/vitest-dev/vitest/tree/main/docs/:path',
        text: 'このページの修正を提案',
      },

      nav: [
        { text: 'Guide', link: '/ja/guide/' },
        { text: 'API', link: '/ja/api/' },
        { text: 'Config', link: '/ja/config/' },
        { text: 'Advanced', link: '/ja/advanced/api' },
        {
          text: `v${version}`,
          items: [
            {
              text: 'Release Notes ',
              link: releases,
            },
            {
              text: 'Contributing ',
              link: contributing,
            },
          ],
        },
      ],

      sidebar: {
        '/ja/advanced': [
          {
            text: 'Advanced',
            items: [
              {
                text: 'Vitest Node API',
                link: '/ja/advanced/api',
              },
              {
                text: 'Runner API',
                link: '/ja/advanced/runner',
              },
            ],
          },
        ],
        '/': [
          {
            text: 'Guide',
            items: [
              {
                text: 'Why Vitest 🇯🇵',
                link: '/ja/guide/why',
              },
              {
                text: 'Getting Started 🇯🇵',
                link: '/ja/guide/',
              },
              {
                text: 'Features 🇯🇵',
                link: '/ja/guide/features',
              },
              {
                text: 'CLI',
                link: '/ja/guide/cli',
              },
              {
                text: 'Test Filtering 🚧',
                link: '/ja/guide/filtering',
              },
              {
                text: 'Coverage',
                link: '/ja/guide/coverage',
              },
              {
                text: 'Snapshot',
                link: '/ja/guide/snapshot',
              },
              {
                text: 'Mocking 🚧',
                link: '/ja/guide/mocking',
              },
              {
                text: 'Testing Types',
                link: '/ja/guide/testing-types',
              },
              {
                text: 'Vitest UI',
                link: '/ja/guide/ui',
              },
              {
                text: 'In-source Testing',
                link: '/ja/guide/in-source',
              },
              {
                text: 'Test Context 🚧',
                link: '/ja/guide/test-context',
              },
              {
                text: 'Environment',
                link: '/ja/guide/environment',
              },
              {
                text: 'Extending Matchers 🚧',
                link: '/ja/guide/extending-matchers',
              },
              {
                text: 'IDE Integration 🚧',
                link: '/ja/guide/ide',
              },
              {
                text: 'Debugging 🚧',
                link: '/ja/guide/debugging',
              },
              {
                text: 'Comparisons',
                link: '/ja/guide/comparisons',
              },
              {
                text: 'Migration Guide',
                link: '/ja/guide/migration',
              },
            ],
          },
          {
            text: 'API',
            items: [
              {
                text: 'Test API Reference 🚧',
                link: '/ja/api/',
              },
              {
                text: 'Mock Functions 🚧',
                link: '/ja/api/mock',
              },
              {
                text: 'Vi Utility',
                link: '/ja/api/vi',
              },
              {
                text: 'Expect 🚧',
                link: '/ja/api/expect',
              },
              {
                text: 'ExpectTypeOf',
                link: '/ja/api/expect-typeof',
              },
              {
                text: 'assertType',
                link: '/ja/api/assert-type',
              },
            ],
          },
          {
            text: 'Config',
            items: [
              {
                text: 'Config Reference 🚧',
                link: '/ja/config/',
              },
            ],
          },
        ],
      },
    },
  },

}
